import React, { useEffect, useState } from 'react';
import {
  InputUnit,
  MainTitle,
  MyShopFormField,
  MyShopFormFieldWrap,
  MyShopFormInput,
  MyShopFormLabel,
  MyShopFormTextArea,
  MyShopFormTextBtnWrap,
  MyShopFormUnitInputWrap,
  MyShopNotFound,
  MyShopNotice,
  MyShopNoticeContainer,
  MyShopNoticeRegisterForm,
} from './ShopNoticeRegisterFormPage.styles';
import ShopButton from '@/components/employer/Button/ShopButton';
import {
  getShopNoticeById,
  postShopNoticeRegister,
  putShopNoticeById,
} from '@/api/employer';
import { useNavigate, useParams } from 'react-router-dom';
import StartTimePicker from '@/components/employer/StartTimePicker/StartTimePicker';
import useShopAsync from '@/hooks/useShopAsync';
import { SingleResponse } from '@/types/api.types';
import { NoticeBody } from '@/api/employer.types';
import { ShopNotice } from '@/types/shop.types';
import { formatPrice, formatToComma } from '@/utils/shopUtils';
import { useShopForm } from '@/hooks/useShopForm';
import CloseIcon from '@/assets/icons/close_icon.svg?react';
import { useShopConfirmModal } from '@/hooks/useShopConfirmModal';

const ShopNoticeRegisterModal = React.lazy(
  () => import('@/components/common/Modal/Modal')
);
const ConfirmModal = React.lazy(
  () => import('@/components/common/Modal/ConfirmModal')
);

function ShopNoticeRegisterFormPage() {
  const params = useParams<{ shopId: string; noticeId?: string }>();
  const { shopId, noticeId: urlNoticeId } = params;
  const navigate = useNavigate();
  const [currentNoticeId, setCurrentNoticeId] = useState('');

  const isEditMode = !!urlNoticeId;

  if (!shopId) return null;

  const {
    isOpen: isConfirmOpenModal,
    message,
    openConfirm,
    closeConfirm,
    handleConfirm,
  } = useShopConfirmModal();

  const {
    exec: getShopNotice,
    data: shopNoticeInfo,
    isLoading: isShopNoticeLoading,
  } = useShopAsync<[string, string], SingleResponse<ShopNotice>>(
    getShopNoticeById
  );

  const submitNoticeApi = async (
    shopId: string,
    noticeId: string | undefined,
    body: NoticeBody
  ) => {
    if (noticeId) {
      return await putShopNoticeById(shopId, noticeId, body);
    } else {
      return await postShopNoticeRegister(shopId, body);
    }
  };

  const { exec: submitShopNotice, isLoading: submitShopNoticeLoading } =
    useShopAsync<
      [string, string | undefined, NoticeBody],
      SingleResponse<ShopNotice>
    >(submitNoticeApi);

  const {
    exec,
    isSubmitting,
    handleChange,
    setFieldValue,
    values,
    setValues,
    isOpenModal,
    modalMessage,
    isSuccess,
    isSubmitDisabled,
    closeModal,
  } = useShopForm<NoticeBody, SingleResponse<ShopNotice>>({
    initialValues: {
      hourlyPay: 0,
      startsAt: '',
      workhour: 0,
      description: '',
    },
    validate: (v) => !!(v.hourlyPay && v.startsAt && v.workhour),

    submitFn: async (formData: NoticeBody) => {
      return await submitShopNotice(shopId, urlNoticeId, {
        ...formData,
        hourlyPay: Number(String(formData.hourlyPay).replace(/,/g, '')),
      });
    },
    successMsg: isEditMode
      ? '수정이 완료되었습니다.'
      : '등록이 완료되었습니다.',
    onSuccess: (res) => setCurrentNoticeId(res.item.id),
    onSuccessClose: () => {
      navigate(`/shops/${shopId}/notices/${currentNoticeId}`);
    },
  });

  const handleHourPayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPrice(e.target.value);
    const rawValue = e.target.value.replace(/,/g, '');
    if (/[^0-9]/.test(rawValue) || rawValue === '0') return;
    setFieldValue('hourlyPay', formatted);
  };

  const handleWorkTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value) || value === '0') return;
    const noFirstZeros = value.replace(/^0+(?=\d)/, '');
    setFieldValue('workhour', noFirstZeros);
  };

  const handleCancel = () => {
    openConfirm('취소 하시겠습니까?', () => {
      if (isEditMode) {
        navigate(`/shops/${shopId}/notices/${urlNoticeId}`);
      } else {
        navigate(`/shops/${shopId}`);
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await exec();
  };

  useEffect(() => {
    if (isEditMode) {
      getShopNotice(shopId, urlNoticeId);
    }
  }, []);

  useEffect(() => {
    if (shopNoticeInfo?.item) {
      const { item } = shopNoticeInfo;
      setValues({
        hourlyPay: item.hourlyPay,
        startsAt: item.startsAt,
        workhour: item.workhour,
        description: item.description,
      });
    }
  }, [shopNoticeInfo]);

  if (isShopNoticeLoading && isEditMode)
    return <MyShopNotFound>더 나은 기회를 찾는 중...</MyShopNotFound>;

  return (
    <>
      <MyShopNotice>
        <MyShopNoticeContainer>
          <MainTitle>
            {isEditMode ? '공고 수정' : '공고 등록'}
            <button className="close-icon" onClick={handleCancel}>
              <CloseIcon />
            </button>
          </MainTitle>
          <MyShopNoticeRegisterForm onSubmit={handleSubmit}>
            <MyShopFormFieldWrap>
              {/* 시급 */}
              <MyShopFormField>
                <MyShopFormLabel htmlFor="hourlyPay">시급*</MyShopFormLabel>
                <MyShopFormUnitInputWrap>
                  <MyShopFormInput
                    type="text"
                    inputMode="numeric"
                    id="hourlyPay"
                    value={formatToComma(String(values.hourlyPay))}
                    onChange={handleHourPayChange}
                    placeholder="입력"
                  ></MyShopFormInput>
                  <InputUnit>원</InputUnit>
                </MyShopFormUnitInputWrap>
              </MyShopFormField>
              {/* 시작 일시 */}
              <MyShopFormField>
                <MyShopFormLabel htmlFor="startTime">
                  시작 일시*
                </MyShopFormLabel>
                <StartTimePicker
                  initialDate={values.startsAt}
                  onSelect={(date) => setFieldValue('startsAt', date)}
                />
              </MyShopFormField>
              {/* 업무 시간 */}
              <MyShopFormField>
                <MyShopFormLabel htmlFor="workhour">업무 시간*</MyShopFormLabel>
                <MyShopFormUnitInputWrap>
                  <MyShopFormInput
                    type="text"
                    id="workhour"
                    value={values.workhour}
                    onChange={handleWorkTimeChange}
                    placeholder="입력"
                  />
                  <InputUnit>시간</InputUnit>
                </MyShopFormUnitInputWrap>
              </MyShopFormField>
            </MyShopFormFieldWrap>
            {/* 공고 설명 */}
            <MyShopFormTextBtnWrap>
              <MyShopFormLabel htmlFor="description">공고 설명</MyShopFormLabel>
              <MyShopFormTextArea
                id="description"
                value={values.description}
                onChange={handleChange}
                placeholder="입력"
              ></MyShopFormTextArea>
              <ShopButton type="submit" disabled={isSubmitDisabled}>
                등록하기
              </ShopButton>
            </MyShopFormTextBtnWrap>
          </MyShopNoticeRegisterForm>
          {isOpenModal && (
            <ShopNoticeRegisterModal
              message={modalMessage}
              onClose={closeModal}
            ></ShopNoticeRegisterModal>
          )}
          {isConfirmOpenModal && (
            <ConfirmModal
              message={message}
              onConfirm={handleConfirm}
              onCancel={closeConfirm}
            ></ConfirmModal>
          )}
        </MyShopNoticeContainer>
      </MyShopNotice>
    </>
  );
}

export default ShopNoticeRegisterFormPage;
