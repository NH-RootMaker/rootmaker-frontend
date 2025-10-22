import React, { useState, useEffect } from 'react';
import * as S from './SnakeRoadmap.styles';
import CheckGN from '@/assets/icons/CheckGN.svg';
import TodayNode from '@/assets/icons/TodayNode.svg';

export interface RoadmapNode {
  id: string;
  title: string;
  amount: string;
  completed?: boolean;
  current?: boolean;
  nextMission?: boolean;
}

interface SnakeRoadmapProps {
  nodes: RoadmapNode[];
  containerHeight?: number;
  onNodeClick?: (nodeId: string) => void;
}

const SnakeRoadmap: React.FC<SnakeRoadmapProps> = ({
  nodes,
  containerHeight = 0,
  onNodeClick,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const calculateNodePosition = (index: number) => {
    const nodesPerRow = 3;
    const row = Math.floor(index / nodesPerRow);
    const col = index % nodesPerRow;
    
    // 반응형 간격 계산
    const horizontalSpacing = windowWidth <= 480 ? 35 : windowWidth <= 768 ? 36 : 38; // 가로 간격 (%)
    const verticalSpacing = windowWidth <= 480 ? 120 : windowWidth <= 768 ? 130 : 135; // 세로 간격 (px)
    const startX = windowWidth <= 480 ? 15 : windowWidth <= 768 ? 14 : 12.5; // 시작 X 위치 (%)
    const startY = 20; // 시작 Y 위치 (px)

    // 지그재그: 홀수 줄은 순서 반대
    const actualCol = row % 2 === 0 ? col : (nodesPerRow - 1 - col);

    return {
      x: startX + actualCol * horizontalSpacing,
      y: startY + row * verticalSpacing
    };
  };

  const renderConnections = () => {
    return nodes.slice(0, -1).map((_, index) => {
      const currentPos = calculateNodePosition(index);
      const nextPos = calculateNodePosition(index + 1);
      
      // 각 노드의 중심점 계산
      const startX = currentPos.x;
      const startY = currentPos.y;
      const endX = nextPos.x;
      const endY = nextPos.y;
      
      // 두 점 사이의 거리와 각도 계산 (화면 단위로 변환)
      const pixelsPerPercent = windowWidth / 100;
      
      const deltaXPx = (endX - startX) * pixelsPerPercent;
      const deltaYPx = endY - startY;
      const distance = Math.sqrt(deltaXPx * deltaXPx + deltaYPx * deltaYPx);
      const angle = Math.atan2(deltaYPx, deltaXPx) * 180 / Math.PI;
      
      // 반응형 선 두께
      const lineHeight = windowWidth <= 480 ? 12 : windowWidth <= 768 ? 14 : 16;
      
      return (
        <S.ConnectionLine
          key={`line-${index}`}
          style={{
            position: 'absolute',
            left: `${startX}%`,
            top: `${startY + 10}px`,
            width: `${distance}px`,
            height: `${lineHeight}px`,
            backgroundColor: 'rgba(66, 206, 121, 0.25)',
            transformOrigin: '0 50%',
            transform: `rotate(${angle}deg)`,
            zIndex: 0,
            borderRadius: `${lineHeight / 2}px`,
          }}
        />
      );
    });
  };

  // 진행해야 할 다음 미션 노드 찾기
  const findNextMissionNode = () => {
    return nodes.find(node => node.nextMission);
  };

  const nextMissionNode = findNextMissionNode();

  return (
    <S.Container height={containerHeight}>
      {renderConnections()}
      {nodes.map((node, index) => {
        const { x, y } = calculateNodePosition(index);
        const isNextMission = nextMissionNode?.id === node.id;
        
        return (
          <S.NodeContainer
            key={node.id}
            style={{ left: `${x}%`, top: `${y}px` }}
          >
            <S.NodeButton 
              onClick={() => {
                if ((isNextMission || node.current) && onNodeClick) {
                  onNodeClick(node.id);
                }
              }}
              $clickable={isNextMission || node.current}
              $isCurrent={node.current}
              $isNextMission={isNextMission}
            >
              <img 
                src={isNextMission && !node.completed ? TodayNode : "/stamp_circle.webp"} 
                alt={isNextMission && !node.completed ? "다음 미션 노드" : "스탬프 원형"} 
              />
              {node.completed ? (
                <S.NodeContent>
                  <S.WateringIcon>
                    <img src="/물뿌리개 7.webp" alt="물뿌리개" />
                  </S.WateringIcon>
                  <S.AmountText>미션 성공</S.AmountText>
                </S.NodeContent>
              ) : (
                <S.NodeContent>
                  <S.RoundNumber $isCurrent={node.current} $isNextMission={node.nextMission}>{index + 1}</S.RoundNumber>
                  <S.PaybackPointText $isCurrent={node.current} $isNextMission={node.nextMission}>???</S.PaybackPointText>
                </S.NodeContent>
              )}
              {node.completed && (
                <S.CheckSticker>
                  <img src={CheckGN} alt="완료" />
                </S.CheckSticker>
              )}
            </S.NodeButton>
          </S.NodeContainer>
        );
      })}
    </S.Container>
  );
};

export default SnakeRoadmap;
