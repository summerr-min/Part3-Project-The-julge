import { useNavigate, useParams } from 'react-router-dom';
import {
  FullPageWrapper,
  LoadingText,
  MyShopNotFound,
  PulseCircle,
} from './ShopNoticeDetailPage.styles';
import React, { useCallback, useEffect, useState } from 'react';
import {
  getShopApplicantList,
  getShopNoticeById,
  putShopNoticeDecideStatus,
} from '@/api/employer';
import MyShopApplicantList from '@/components/employer/MyShopApplicantList/MyShopApplicantList';
import MyShopNotice from '@/components/employer/MyShopNotice/MyShopNotice';
import {
  ApplicantItem,
  ApplicantListParams,
  NoticeStatus,
  ShopNotice,
} from '@/types/shop.types';
import useShopAsync from '@/hooks/useShopAsync';
import { ListResponse, SingleResponse } from '@/types/api.types';
const ConfirmModal = React.lazy(
  () => import('@/components/common/Modal/ConfirmModal')
);

function ShopNoticeDetailPage() {
  const navigate = useNavigate();
  const params = useParams<{ shopId: string; noticeId: string }>();
  const { shopId, noticeId } = params;

  const [applicantInfoById, setApplicantInfoById] = useState<{
    applicant: ApplicantItem;
    type: NoticeStatus;
  } | null>(null);
  const [modalMessage, setModalMessage] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [count, setCount] = useState(0);

  const offset = (currentPage - 1) * pageSize;

  const {
    exec: getShopNoticeDetail,
    data: shopNotice,
    isLoading: isShopNoticeLoading,
  } = useShopAsync<[string, string], SingleResponse<ShopNotice>>(
    getShopNoticeById
  );

  const {
    exec: getShopApplicants,
    data: applicantList,
    isLoading: isApplicantLoading,
  } = useShopAsync<
    [string, string, ApplicantListParams],
    ListResponse<ApplicantItem>
  >(getShopApplicantList);

  const { exec: decideStatus } = useShopAsync(putShopNoticeDecideStatus);

  useEffect(() => {
    if (count > 0) {
      const totalPages = Math.ceil(count / pageSize);
      if (currentPage > totalPages) {
        setCurrentPage(totalPages);
      }
    }
  }, [pageSize, count, currentPage]);

  if (!shopId || !noticeId) return null;

  const fetchApplicants = useCallback(async () => {
    if (!shopId || !noticeId) return;
    try {
      const res = await getShopApplicants(shopId, noticeId, {
        offset,
        limit: pageSize,
      });

      if (res?.count !== undefined) {
        setCount(res.count);
      }
    } catch (e) {
      console.error('getShopApplicants 에러:', e);
    }
  }, [getShopApplicants, shopId, noticeId, offset, pageSize]);

  const onShopApplicantById = (
    applicant: ApplicantItem,
    type: NoticeStatus
  ) => {
    setApplicantInfoById({ applicant, type });
  };

  const handleSubmitConfirmModal = async () => {
    if (!applicantInfoById) return;
    const res = await decideStatus(
      shopId,
      noticeId,
      applicantInfoById?.applicant.item.id,
      applicantInfoById?.type
    );
    fetchApplicants();
    console.log('res-handleStatusSubmit:::', res);
    setIsOpenModal(false);
    setModalMessage('');

    if (applicantInfoById?.type === 'accepted') {
      navigate(`/shops/${shopId}`);
    }
  };

  const handleSubmitCancelModal = () => {
    setIsOpenModal(false);
    setModalMessage('');
  };

  useEffect(() => {
    if (shopId && noticeId) {
      Promise.all([getShopNoticeDetail(shopId, noticeId), fetchApplicants()]);
    }
  }, [fetchApplicants, shopId, noticeId]);

  if (isShopNoticeLoading)
    return (
      <MyShopNotFound>
        <FullPageWrapper style={{ flexDirection: 'column' }}>
          <PulseCircle />
          <PulseCircle style={{ animationDelay: '-1s' }} />
          <LoadingText>더 나은 기회를 찾는 중...</LoadingText>
        </FullPageWrapper>
      </MyShopNotFound>
    );

  if (!shopNotice)
    return (
      <MyShopNotFound>
        가게 정보를 불러올 수 없습니다. 아이디를 확인해주세요.
      </MyShopNotFound>
    );

  if (!applicantList) return null;

  return (
    <>
      <MyShopNotice shopNotice={shopNotice.item}></MyShopNotice>
      <MyShopApplicantList
        applicantList={applicantList.items}
        shopId={shopId}
        noticeId={noticeId}
        isApplicantLoading={isApplicantLoading}
        currentPage={currentPage}
        pageSize={pageSize}
        count={count}
        onSetModalMessage={setModalMessage}
        onSetIsOpenModal={setIsOpenModal}
        onShopApplicantById={onShopApplicantById}
        onSetCurrentPage={setCurrentPage}
      />

      {isOpenModal && (
        <ConfirmModal
          message={modalMessage}
          onConfirm={handleSubmitConfirmModal}
          onCancel={handleSubmitCancelModal}
        ></ConfirmModal>
      )}
    </>
  );
}

export default ShopNoticeDetailPage;
