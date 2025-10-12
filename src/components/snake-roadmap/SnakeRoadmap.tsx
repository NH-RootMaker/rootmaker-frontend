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
    // 번개 모양: 3-1-3-1 패턴으로 배치
    let segment = 0;
    let posInSegment = 0;
    let remaining = index;
    
    // 3-1-3-1 패턴으로 세그먼트와 위치 계산
    while (remaining >= 0) {
      const currentSegmentLength = segment % 2 === 0 ? 3 : 1; // 짝수 세그먼트는 3개, 홀수는 1개
      
      if (remaining < currentSegmentLength) {
        posInSegment = remaining;
        break;
      }
      
      remaining -= currentSegmentLength;
      segment++;
    }
    
    // 세그먼트마다 방향 변경 (오른쪽 아래 → 왼쪽 아래 → 오른쪽 아래...)
    const isRightDirection = segment % 2 === 0;
    
    let x: number, y: number;
    
    // 각 세그먼트의 시작 y 위치 계산
    const baseY = 40 + segment * 110;
    
    if (isRightDirection) {
      // 오른쪽 아래 대각선 (3개: 1-2-3, 5-6-7, ...)
      x = 15 + posInSegment * 35;
      y = baseY + posInSegment * 35;
    } else {
      // 왼쪽 아래 대각선 (1개: 4, 8, ...)
      x = 50;
      y = baseY + 35;
    }
    
    return { x, y };
  };

  return (
    <S.Container height={containerHeight}>
      {nodes.map((node, index) => {
        const { x, y } = calculateNodePosition(index);
        return (
          <S.NodeContainer
            key={node.id}
            style={{ left: `${x}%`, top: `${y}px` }}
          >
            <S.NodeButton>
              <img src={RoadButton} alt="로드 버튼" />
              {node.completed && (
                <S.NodeContent>
                  <S.WateringIcon>
                    <img src="/물뿌리개 7.webp" alt="물뿌리개" />
                  </S.WateringIcon>
                  <S.AmountText>{((index + 1) * 10000).toLocaleString()}원</S.AmountText>
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
