import { getUserById } from '@/api/employer';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import Modal from '@/components/common/Modal/Modal';

function EmployerRoute() {
  const navigate = useNavigate();
  const { shopId: urlShopId } = useParams<{ shopId: string }>();
  const { currentUser } = useAuth();

  const [myShopId, setMyShopId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState({
    open: false,
    message: '',
    target: '/',
  });

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser?.type === 'employer' && currentUser?.id) {
        try {
          const res = await getUserById(currentUser?.id.toString());
          if (res.item.shop === null) {
            setMyShopId(null);
          } else {
            setMyShopId(res.item.shop.item.id);
          }
        } catch (error) {
          console.error('내정보 로드 실패', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  useEffect(() => {
    if (isLoading) return;

    if (!currentUser) {
      setShowError({
        open: true,
        message: '로그인이 필요합니다.',
        target: '/login',
      });
      return;
    }

    if (currentUser.type !== 'employer') {
      setShowError({
        open: true,
        message: '사장님 전용 페이지입니다.',
        target: '/',
      });
      return;
    }

    if (urlShopId && myShopId && urlShopId !== myShopId) {
      setShowError({
        open: true,
        message: '본인의 가게만 접근 할 수 있습니다.',
        target: '/',
      });
      return;
    }
  }, [isLoading, currentUser, urlShopId, myShopId]);

  const handleCloseModal = () => {
    const target = showError.target;
    setShowError({ ...showError, open: false });
    navigate(target, { replace: true });
  };

  if (isLoading)
    return (
      <div
        style={{
          minHeight: '81vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        권한 확인 중...
      </div>
    );

  if (showError.open) {
    return <Modal message={showError.message} onClose={handleCloseModal} />;
  }

  return <Outlet />;
}

export default EmployerRoute;
