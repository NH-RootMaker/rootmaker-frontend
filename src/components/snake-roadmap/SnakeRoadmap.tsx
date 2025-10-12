import React from 'react';
import * as S from './SnakeRoadmap.styles';
import CheckGN from '@/assets/icons/CheckGN.svg';
import RoadButton from '@/assets/icons/RoadButton.svg';

export interface RoadmapNode {
  id: string;
  title: string;
  amount: string;
  completed?: boolean;
  current?: boolean;
}

interface SnakeRoadmapProps {
  nodes: RoadmapNode[];
  containerHeight?: number;
}

const SnakeRoadmap: React.FC<SnakeRoadmapProps> = ({
  nodes,
  containerHeight = 600,
}) => {
  const calculateNodePosition = (index: number) => {
    const nodesPerRow = 3;
    const row = Math.floor(index / nodesPerRow);
    const col = index % nodesPerRow;
    
    const horizontalSpacing = 30; // 가로 간격 (%)
    const verticalSpacing = 135; // 세로 간격 (px)
    const startX = 20; // 시작 X 위치 (%)
    const startY = 40; // 시작 Y 위치 (px)

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
      const viewportWidth = window.innerWidth || 480;
      const pixelsPerPercent = viewportWidth / 100;
      
      const deltaXPx = (endX - startX) * pixelsPerPercent;
      const deltaYPx = endY - startY;
      const distance = Math.sqrt(deltaXPx * deltaXPx + deltaYPx * deltaYPx);
      const angle = Math.atan2(deltaYPx, deltaXPx) * 180 / Math.PI;
      
      return (
        <S.ConnectionLine
          key={`line-${index}`}
          style={{
            position: 'absolute',
            left: `${startX}%`,
            top: `${startY+10}px`,
            width: `${distance}px`,
            height: '16px',
            backgroundColor: 'rgba(66, 206, 121, 0.25)',
            transformOrigin: '0 50%',
            transform: `rotate(${angle}deg)`,
            zIndex: 0,
          }}
        />
      );
    });
  };

  return (
    <S.Container height={containerHeight}>
      {renderConnections()}
      {nodes.map((node, index) => {
        const { x, y } = calculateNodePosition(index);
        return (
          <S.NodeContainer
            key={node.id}
            style={{ left: `${x}%`, top: `${y}px` }}
          >
            <S.NodeButton>
              <img src={RoadButton} alt="로드 버튼" />
              {node.completed ? (
                <S.NodeContent>
                  <S.WateringIcon>
                    <img src="/물뿌리개 7.webp" alt="물뿌리개" />
                  </S.WateringIcon>
                  <S.AmountText>{((index + 1) * 10000).toLocaleString()}원 달성</S.AmountText>
                </S.NodeContent>
              ) : (
                <S.NodeContent>
                  <S.RoundNumber>{index + 1}</S.RoundNumber>
                  <S.PaybackPointText>1,000원</S.PaybackPointText>
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
