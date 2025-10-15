import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BufferRouterPage = () => {
  const navigate = useNavigate();
  
  // 로그인 상태 확인
  const isLoggedIn = localStorage.getItem('user-logged-in') === 'true';
  
  useEffect(() => {
    // 로그인 상태에 따라 실제 라우트로 리다이렉트
    if (isLoggedIn) {
      navigate('/my-subscription', { replace: true });
    } else {
      navigate('/buffer-empty', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  // 리다이렉트 중이므로 빈 컴포넌트 반환
  return null;
};

export default BufferRouterPage;