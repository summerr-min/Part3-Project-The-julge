import { memo, useCallback, useMemo, useState } from 'react';
import {
  AcceptButton,
  Dot,
  DotWrapper,
  MainTitle,
  MyShopApplicantLists,
  MyshopApplicantListContainer,
  MyshopNoticeNoList,
  NoticeApplyListTableWrap,
  RejectButton,
  StatusTag,
} from './MyShopApplicantList.styles';
import { STATUS, STATUS_TEXT } from '@/constants/status';
import axios from 'axios';
import { ApplicantItem, NoticeStatus } from '@/types/shop.types';
import Table from '@/components/common/Table/Table';
import * as S from '@/components/common/Table/Table.styles';
import ShopButton from '../Button/ShopButton';
import { Link } from 'react-router-dom';

const HEADERS = [
  { key: 'name', label: '신청자' },
  { key: 'bio', label: '소개' },
  { key: 'phone', label: '전화번호' },
  { key: 'status', label: '상태' },
];

interface Props {
  applicantList: ApplicantItem[];
  shopId: string;
  noticeId: string;
  isApplicantLoading: boolean;
  currentPage: number;
  pageSize: number;
  count: number;
  onSetModalMessage: (m: string) => void;
  onSetIsOpenModal: (t: boolean) => void;
  onShopApplicantById: (applicant: ApplicantItem, type: NoticeStatus) => void;
  onSetCurrentPage: (page: number) => void;
}

function MyShopApplicantList({
  applicantList,
  shopId,
  noticeId,
  isApplicantLoading,
  currentPage,
  pageSize,
  count,
  onSetModalMessage,
  onSetIsOpenModal,
  onShopApplicantById,
  onSetCurrentPage,
}: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!shopId || !noticeId) return null;

  const renderedLeftChildren = useMemo(() => {
    return applicantList.map((applicant) => (
      <tr key={applicant.item.id}>
        <S.TdStyles>{applicant.item.user.item.name}</S.TdStyles>
        <S.TdStyles>{applicant.item.user.item.bio}</S.TdStyles>
        <S.TdStyles>{applicant.item.user.item.phone}</S.TdStyles>
      </tr>
    ));
  }, [applicantList]);

  const renderedRightChildren = useMemo(() => {
    return applicantList.map((applicant) => (
      <tr key={`status-${applicant.item.id}`}>
        <S.StatusTdStyles>
          {applicant.item.status === 'pending' ? (
            <div>
              <RejectButton
                onClick={(e) =>
                  handleStatusSubmit(e, applicant, STATUS.REJECTED)
                }
              >
                거절하기
              </RejectButton>
              <AcceptButton
                onClick={(e) =>
                  handleStatusSubmit(e, applicant, STATUS.ACCEPTED)
                }
              >
                승인하기
              </AcceptButton>
            </div>
          ) : (
            <StatusTag $status={applicant.item.status}>
              {STATUS_TEXT[applicant.item.status] || '알수없음'}
            </StatusTag>
          )}
        </S.StatusTdStyles>
      </tr>
    ));
  }, [applicantList]);

  const handleStatusSubmit = useCallback(
    async (
      e: React.SyntheticEvent,
      applicant: ApplicantItem,
      type: NoticeStatus
    ) => {
      e.preventDefault();
      if (isSubmitting) return;
      try {
        setIsSubmitting(true);
        onShopApplicantById(applicant, type);

        if (type === 'accepted') {
          onSetModalMessage('신청을 승인하시겠어요??');
        } else if (type === 'rejected') {
          onSetModalMessage('신청을 거절하시겠어요??');
        }
        onSetIsOpenModal(true);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          const status = e.response?.status;
          const message = e.response?.data?.message;
          console.error('e status::::', status);
          console.error('e message::::', message);

          onSetModalMessage(message);
          onSetIsOpenModal(true);
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [shopId, noticeId, isSubmitting]
  );

  if (!applicantList) return null;

  return (
    <MyShopApplicantLists>
      <MyshopApplicantListContainer>
        <MainTitle>
          신청자 목록
          {isApplicantLoading && (
            <div
              style={{
                marginTop: '30px',
                position: 'absolute',
                top: '-20px',
                left: '160px',
              }}
            >
              <DotWrapper>
                <Dot $delay="-0.32s" />
                <Dot $delay="-0.16s" />
                <Dot $delay="-0.01s" />
              </DotWrapper>
            </div>
          )}
        </MainTitle>
        {applicantList.length > 0 ? (
          <NoticeApplyListTableWrap>
            <Table
              headers={HEADERS}
              dataLength={applicantList.length}
              fixedRowCount={5}
              totalPages={Math.ceil(count / pageSize)}
              currentPage={currentPage}
              onChangePage={onSetCurrentPage}
              leftChildren={renderedLeftChildren}
              rightChildren={renderedRightChildren}
            />
          </NoticeApplyListTableWrap>
        ) : (
          !isApplicantLoading && (
            <>
              <MyshopNoticeNoList>
                <p>신청자 목록이 없습니다.</p>
                <ShopButton as={Link} to={`/shops/${shopId}`}>
                  등록한 공고 보러가기
                </ShopButton>
              </MyshopNoticeNoList>
            </>
          )
        )}
      </MyshopApplicantListContainer>
    </MyShopApplicantLists>
  );
}

export default memo(MyShopApplicantList);
