import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '@/constants/user-data';

const BufferRouterPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkUserInfo = async () => {
      const userInfo = await getUserInfo();
      
      // 로그인 상태에 따라 실제 라우트로 리다이렉트
      if (userInfo.isLoggedIn) {
        navigate('/my-subscription', { replace: true });
      } else {
        navigate('/buffer-empty', { replace: true });
      }
    };
    
    checkUserInfo();
  }, [navigate]);

  // 리다이렉트 중이므로 빈 컴포넌트 반환
  return null;
};

export default BufferRouterPage;