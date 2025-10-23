import React, { useState } from 'react';
import styled from 'styled-components';
import { resetDailyProgress } from '@/utils/daily-progress';

const DevContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 8px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  backdrop-filter: blur(10px);
`;

const DevButton = styled.button`
  background: #ff4444;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 11px;
  cursor: pointer;
  
  &:hover {
    background: #ff6666;
  }
  
  &:active {
    background: #cc3333;
  }
`;

const ToggleButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 10px;
  cursor: pointer;
  
  &:hover {
    background: #555;
  }
`;

const DevTools: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // 개발 환경에서만 표시
  if (import.meta.env.PROD) {
    return null;
  }

  const handleResetStorage = () => {
    if (confirm('모든 로컬 스토리지 데이터를 초기화하시겠습니까?')) {
      // 모든 관련 localStorage 항목 제거
      localStorage.removeItem('daily-progress');
      localStorage.removeItem('challenge-progress');
      localStorage.removeItem('daily-transfers');
      localStorage.removeItem('user-logged-in');
      localStorage.removeItem('user-name');
      localStorage.removeItem('account-number');
      localStorage.removeItem('personality-test-result');
      localStorage.removeItem('last-toast-date');
      
      alert('로컬 스토리지가 초기화되었습니다. 페이지를 새로고침합니다.');
      window.location.reload();
    }
  };

  const handleResetDailyProgress = () => {
    if (confirm('일별 진행 상황만 초기화하시겠습니까?')) {
      resetDailyProgress();
      alert('일별 진행 상황이 초기화되었습니다.');
      window.location.reload();
    }
  };

  if (!isExpanded) {
    return (
      <DevContainer>
        <ToggleButton onClick={() => setIsExpanded(true)}>
          🔧 DEV
        </ToggleButton>
      </DevContainer>
    );
  }

  return (
    <DevContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>🔧 Developer Tools</span>
        <ToggleButton onClick={() => setIsExpanded(false)}>×</ToggleButton>
      </div>
      
      <DevButton onClick={handleResetStorage}>
        🗑️ 전체 초기화
      </DevButton>
      
      <DevButton onClick={handleResetDailyProgress}>
        📅 진행상황 초기화
      </DevButton>
      
      <div style={{ fontSize: '10px', opacity: 0.7 }}>
        개발 환경에서만 표시됩니다
      </div>
    </DevContainer>
  );
};

export default DevTools;