import { useNavigate } from 'react-router-dom';
import { Container, Title, Description, StartButton } from './HomePage.styles';

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate('/personality-test');
  };

  return (
      <Container>
        <Title>NH 루트메이커</Title>
        <Description>
          당신의 청약 저축 유형을 알아보세요
        </Description>
        <StartButton onClick={handleStartTest}>
          나의 나무 알아보기
        </StartButton>
      </Container>
  );
};

export default HomePage;