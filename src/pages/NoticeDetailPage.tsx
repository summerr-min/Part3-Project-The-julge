import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAsync from '@/hooks/useAsync';
import { getShopNotice, getUser } from '@/api/notice';
import NoticeInfo from '@/components/list/NoticeInfo/NoticeInfo';
import NoticeRecentViewed from '@/components/list/NoticeRecentViewed/NoticeRecentViewed';
import { Notice } from '@/types/notice.types';
import { UserData } from '@/types/user.types';
import { Address } from '@/types/address.types';
import { addNewNotice } from '@/utils/noticeRecentViewed';
import extractUserIdFromJWT from '@/utils/extractUserIdFromJWT';
import { Wrapper } from './NoticeDetailPage.styles';

function NoticeDetailPage() {
  const { execute } = useAsync(getShopNotice);
  const { execute: getUserExecute } = useAsync(getUser);

  const [notice, setNotice] = useState<Notice | undefined>();
  const [user, setUser] = useState<UserData>();

  const [profileChecked, setProfileChecked] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);

  const { shopId, noticeId } = useParams<{
    shopId: string;
    noticeId: string;
  }>();

  const fetchNotice = async () => {
    const response: any = await execute({
      url: { shopId: shopId as string, noticeId: noticeId as string },
    });
    setNotice(response.data);
  };

  const userDataFetch = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;

    const userId = extractUserIdFromJWT(accessToken);
    if (!userId) return;

    const response: any = await getUserExecute({ userId });
    const data = response?.data ?? response;

    setUser(data);

    const ok =
      data?.item?.type === 'employee' &&
      !!(data?.item?.name && data?.item?.phone && data?.item?.address);

    setHasProfile(ok);
    setProfileChecked(true);
  };

  useEffect(() => {
    if (!shopId || !noticeId) return;

    fetchNotice();
    userDataFetch();
  }, [shopId, noticeId]);

  if (!notice) return null;

  addNewNotice(notice);

  const {
    closed,
    currentUserApplication,
    shop: { item: shopItem },
    hourlyPay,
    description: noticeDescription,
    startsAt,
    workhour,
  } = notice.item;

  const {
    category,
    name: shopName,
    address1: address,
    imageUrl,
    originalHourlyPay: defaultHourlyPay,
    description: shopDescription,
  } = shopItem;

  const isEmployer = user?.item?.type === 'employer';

  return (
    <Wrapper>
      <NoticeInfo
        isClosed={closed}
        shopId={shopId as string}
        noticeId={noticeId as string}
        applyStatus={currentUserApplication?.item.status}
        category={category}
        shopName={shopName}
        address={address as Address}
        imageUrl={imageUrl}
        defaultHourlyPay={defaultHourlyPay}
        currentHourlyPay={hourlyPay}
        shopDescription={shopDescription}
        noticeDescription={noticeDescription}
        startsAt={startsAt}
        workhour={workhour}
        onApply={fetchNotice}
        applicationId={currentUserApplication?.item.id}
        hasProfile={hasProfile}
        profileChecked={profileChecked}
        isEmployer={isEmployer}
      />
      <NoticeRecentViewed />
    </Wrapper>
  );
}

export default NoticeDetailPage;
