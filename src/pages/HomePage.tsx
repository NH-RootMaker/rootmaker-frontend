import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonButton from '@/components/common-button';
import CommonInput from '@/components/common-input';
import { Container, Title, Description, InputSection, ButtonContainer } from './HomePage.styles';
import * as S from './HomePage.styles';

const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleStartTest = () => {
    if (username.trim()) {
      navigate('/test', { state: { username: username.trim() } });
    } else {
      alert('이름을 입력해주세요!');
    }
  };

  return (
      <Container>
        <Title>NH 루트메이커</Title>
        <Description>
          당신의 청약 저축 유형을 알아보세요
        </Description>
        
        <InputSection>
          <CommonInput
            placeholder="이름을 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleStartTest()}
            width="100%"
          />
          
          <ButtonContainer>
            <CommonButton variant="primary" onClick={handleStartTest} width="100%">
              나의 나무 알아보기
            </CommonButton>
          </ButtonContainer>
          <S.Notice>
            ※ 테스트 결과는 저장되지 않습니다
          </S.Notice>
        </InputSection>
      </Container>
  );
};

export default HomePage;