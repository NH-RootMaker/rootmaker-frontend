import * as S from './LoadingScreen.styles';

interface LoadingScreenProps {
  message?: string;
  showSpinner?: boolean;
}

const LoadingScreen = ({ 
  message = '로딩중', 
  showSpinner = true 
}: LoadingScreenProps) => {
  return (
    <S.LoadingContainer>
      <S.TopNavPlaceholder />
      <S.LoadingContent>
        {showSpinner && <S.Spinner />}
        <S.LoadingText>{message}</S.LoadingText>
      </S.LoadingContent>
      <S.BottomNavPlaceholder />
    </S.LoadingContainer>
  );
};

export default LoadingScreen;