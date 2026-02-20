import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAsync from '@/hooks/useAsync';
import { getShopNotice } from '@/api/notice';
import NoticeInfo from '@/components/list/NoticeInfo/NoticeInfo';
import { Notice } from '@/types/notice.types';
import { Address } from '@/types/address.types';
import { addNewNotice } from '@/utils/noticeRecentViewed';
import NoticeRecentViewed from '@/components/list/NoticeRecentViewed/NoticeRecentViewed';
import { UserData } from '@/types/user.types';
import { getUser } from '@/api/notice';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';
import { Wrapper } from './NoticeDetailPage.styles';

function NoticeDetailPage() {
  const [token, setToken] = useState<string>('');
  const { execute } = useAsync(getShopNotice);
  const { execute: getUserExecute } = useAsync(getUser);
  const [notice, setNotice] = useState<Notice | undefined>();
  const [user, setUser] = useState<UserData>();
  console.log(user); //나중에 user 정보 활용할 때 사용

  const { shopId, noticeId } = useParams<{
    shopId: string;
    noticeId: string;
  }>();

  const fetchNotice = async () => {
    const response: any = await execute({
      url: { shopId: shopId!, noticeId: noticeId! },
    });
    setNotice(response.data);
  };

  useEffect(() => {
    if (shopId && noticeId) {
      fetchNotice();
    }
  }, [shopId, noticeId]);

  const userDataFetch = async () => {
    const response: any = await getUserExecute({
      userId: extractUserIdFromJWT(token),
    });
    setUser(response.data);
  };

  useEffect(() => {
    if (token) {
      userDataFetch();
    }
  }, [token]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('token');

      if (item) {
        setToken(item);
      }
    }
  }, []);

  if (!notice) {
    return null;
  }

  addNewNotice(notice);

  const {
    closed,
    currentUserApplication,
    shop: { item: shopItem },
    wage,
    description: noticeDescription,
    startsAt,
    workHour,
  } = notice.item;

  const {
    category,
    name: shopName,
    address1: address,
    imageUrl,
    originalWage: defaultWage,
    description: shopDescription,
  } = shopItem;

  return (
    <Wrapper>
      <NoticeInfo
        isClosed={closed}
        shopId={shopId!}
        noticeId={noticeId!}
        applyStatus={currentUserApplication?.item.status}
        category={category}
        shopName={shopName}
        address={address as Address}
        imageUrl={imageUrl}
        defaultWage={defaultWage}
        currentWage={wage}
        shopDescription={shopDescription}
        noticeDescription={noticeDescription}
        startsAt={startsAt}
        workHour={workHour}
        onApply={fetchNotice}
      />
      <NoticeRecentViewed />
    </Wrapper>
  );
}

export default NoticeDetailPage;
