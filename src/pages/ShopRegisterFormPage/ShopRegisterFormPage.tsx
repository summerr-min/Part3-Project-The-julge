import React, { useEffect, useState } from 'react';
import {
  InputUnit,
  MainTitle,
  MyShop,
  MyShopFormField,
  MyShopFormFieldWrap,
  MyShopFormImgInput,
  MyShopFormImgLabel,
  MyShopFormInput,
  MyShopFormLabel,
  MyShopFormLabelDiv,
  MyShopFormTextArea,
  MyShopFormTextBtnWrap,
  MyShopFormUnitInputWrap,
  MyShopFormWrap,
  MyShopNotFound,
  MyShopRegisterForm,
  StyledCameraIcon,
} from './ShopRegisterFormPage.styles';
import ShopButton from '@/components/employer/Button/ShopButton';
import { getShopById, postShopRegister, putShopById } from '@/api/employer';
import { useNavigate, useParams } from 'react-router-dom';
import useShopAsync from '@/hooks/useShopAsync';
import { SingleResponse } from '@/types/api.types';
import { ShopFormData, ShopInfo } from '@/types/shop.types';
import { ShopBody } from '@/api/employer.types';
import { useImageUpload } from '@/hooks/useImageUpload';
import { formatPrice, formatToComma } from '@/utils/shopUtils';
import { useShopForm } from '@/hooks/useShopForm';
import CloseIcon from '@/assets/icons/close_icon.svg?react';
import { useShopConfirmModal } from '@/hooks/useShopConfirmModal';
import { SEOUL_DISTRICTS } from '@/constants/locations';
import { FOOD_CATEGORY } from '@/constants/category';
import Dropdown from '@/components/common/Dropdown/Dropdown';

const ShopRegisterModal = React.lazy(
  () => import('@/components/common/Modal/Modal')
);

const ConfirmModal = React.lazy(
  () => import('@/components/common/Modal/ConfirmModal')
);

function ShopRegisterFormPage() {
  const params = useParams<{ shopId?: string }>();
  const { shopId: urlShopId } = params;
  const navigate = useNavigate();
  const [myShopId, setMyShopId] = useState('');

  const [file, setFile] = useState<File | null>(null);

  const { uploadImage } = useImageUpload();

  const isEditMode = !!urlShopId;

  const {
    isOpen: isConfirmOpenModal,
    message,
    openConfirm,
    closeConfirm,
    handleConfirm,
  } = useShopConfirmModal();

  const {
    exec: getShop,
    data: shopInfo,
    isLoading: isShopLoading,
  } = useShopAsync<[string], SingleResponse<ShopInfo>>(getShopById);

  const submitMyShopApi = async (
    shopId: string | undefined,
    body: ShopBody
  ) => {
    if (shopId) {
      return await putShopById(shopId, body);
    } else {
      return await postShopRegister(body);
    }
  };

  const { exec: submitShop } = useShopAsync<
    [string | undefined, ShopBody],
    SingleResponse<ShopInfo>
  >(submitMyShopApi);

  const {
    exec,
    handleChange,
    setFieldValue,
    values,
    setValues,
    isOpenModal,
    modalMessage,
    isSubmitDisabled,
    closeModal,
  } = useShopForm<ShopFormData, SingleResponse<ShopInfo>>({
    initialValues: {
      name: '',
      category: '',
      address1: '',
      address2: '',
      description: '',
      imageUrl: '',
      originalHourlyPay: 0,
      previewUrl: '',
    },
    validate: (v) =>
      !!(
        v.name &&
        v.category &&
        v.address1 &&
        v.address2 &&
        v.originalHourlyPay
      ),

    submitFn: async (formData: ShopFormData) => {
      let finalImageUrl = '';

      if (file) {
        const result = await uploadImage(file);
        if (!result.success) throw new Error(result.message);
        finalImageUrl = result.url;
      }

      return await submitShop(urlShopId, {
        ...formData,
        imageUrl: isEditMode
          ? !file && formData.previewUrl
            ? formData.previewUrl.trim()
            : finalImageUrl.trim()
          : finalImageUrl.trim(),
        originalHourlyPay: Number(
          String(formData.originalHourlyPay).replace(/,/g, '')
        ),
      });
    },
    successMsg: isEditMode
      ? '수정이 완료되었습니다.'
      : '등록이 완료되었습니다.',
    onSuccess: (res) => setMyShopId(res.item.id),
    onSuccessClose: () => {
      navigate(`/shops/${myShopId}`);
    },
  });

  const handleDefaultPayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPrice(e.target.value);
    const rawValue = e.target.value.replace(/,/g, '');
    if (/[^0-9]/.test(rawValue) || rawValue === '0') return;
    setFieldValue('originalHourlyPay', formatted);
  };

  // 이미지
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextFile = e.target.files?.[0];
    if (nextFile) {
      setFile(nextFile);

      const objectUrl = URL.createObjectURL(nextFile);
      setFieldValue('previewUrl', objectUrl);
    }
  };

  const handleCancel = () => {
    openConfirm('취소 하시겠습니까?', () => {
      if (isEditMode) {
        navigate(`/shops/${urlShopId}`);
      } else {
        navigate(`/shops/register`);
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await exec();
  };

  useEffect(() => {
    if (isEditMode) {
      getShop(urlShopId);
    }
  }, []);

  useEffect(() => {
    if (shopInfo?.item) {
      const { item } = shopInfo;
      setValues({
        name: item.name,
        category: item.category,
        address1: item.address1,
        address2: item.address2,
        originalHourlyPay: item.originalHourlyPay,
        description: item.description,
        imageUrl: item.imageUrl,
        previewUrl: item.imageUrl,
      });
    }
  }, [shopInfo]);

  if (isShopLoading && isEditMode)
    return <MyShopNotFound>더 나은 기회를 찾는 중...</MyShopNotFound>;

  return (
    <>
      <MyShop>
        <MainTitle>
          {isEditMode ? '가게 정보 수정' : '가게 정보 등록'}
          <button className="close-icon" onClick={handleCancel}>
            <CloseIcon />
          </button>
        </MainTitle>
        <MyShopRegisterForm onSubmit={handleSubmit}>
          <MyShopFormFieldWrap>
            {/* 가계 이름 */}
            <MyShopFormField>
              <MyShopFormLabel htmlFor="name">가게 이름*</MyShopFormLabel>
              <MyShopFormInput
                type="text"
                id="name"
                value={values.name}
                onChange={handleChange}
                placeholder="입력"
              />
            </MyShopFormField>
            {/* 분류 */}
            <MyShopFormField>
              <MyShopFormLabel htmlFor="category">분류*</MyShopFormLabel>
              <Dropdown
                id="address1"
                options={[...FOOD_CATEGORY]}
                placeholder="선택"
                value={values.category}
                onSelect={(item) => setFieldValue('category', item)}
              />
            </MyShopFormField>
            {/* 주소 */}
            <MyShopFormField>
              <MyShopFormLabel htmlFor="address1">주소*</MyShopFormLabel>
              <Dropdown
                id="address1"
                options={[...SEOUL_DISTRICTS]}
                placeholder="선택"
                value={values.address1}
                onSelect={(item) => setFieldValue('address1', item)}
              />
            </MyShopFormField>
            {/* 상세 주소 */}
            <MyShopFormField>
              <MyShopFormLabel htmlFor="address2">상세 주소*</MyShopFormLabel>
              <MyShopFormInput
                id="address2"
                value={values.address2}
                onChange={handleChange}
                placeholder="입력"
              />
            </MyShopFormField>
            {/* 기본 시급 */}
            <MyShopFormField>
              <MyShopFormLabel htmlFor="originalHourlyPay">
                기본 시급*
              </MyShopFormLabel>
              <MyShopFormUnitInputWrap>
                <MyShopFormInput
                  type="text"
                  inputMode="numeric"
                  id="originalHourlyPay"
                  value={formatToComma(String(values.originalHourlyPay))}
                  onChange={handleDefaultPayChange}
                  placeholder="입력"
                ></MyShopFormInput>
                <InputUnit>원</InputUnit>
              </MyShopFormUnitInputWrap>
            </MyShopFormField>
            {/* 가게 이미지 */}
            <MyShopFormWrap>
              <MyShopFormLabelDiv>가게 이미지</MyShopFormLabelDiv>
              <MyShopFormImgLabel htmlFor="shopImg">
                {values.previewUrl ? (
                  isEditMode ? (
                    <>
                      <div className="dimmed">
                        <StyledCameraIcon />
                        <p>이미지 변경하기</p>
                        <div className="bgDim" />
                      </div>
                      <img
                        src={values.previewUrl}
                        alt="업로드 이미지 미리보기"
                      />
                    </>
                  ) : (
                    <img src={values.previewUrl} alt="업로드 이미지 미리보기" />
                  )
                ) : (
                  <div>
                    <StyledCameraIcon />
                    <p>{isEditMode ? '이미지 변경하기' : '이미지 추가하기'}</p>
                  </div>
                )}
              </MyShopFormImgLabel>
              <MyShopFormImgInput
                id="shopImg"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </MyShopFormWrap>
          </MyShopFormFieldWrap>
          {/* 가게 설명 */}
          <MyShopFormTextBtnWrap>
            <MyShopFormLabel htmlFor="description">가게 설명</MyShopFormLabel>
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
        </MyShopRegisterForm>
        {isOpenModal && (
          <ShopRegisterModal
            message={modalMessage}
            onClose={closeModal}
          ></ShopRegisterModal>
        )}
        {isConfirmOpenModal && (
          <ConfirmModal
            message={message}
            onConfirm={handleConfirm}
            onCancel={closeConfirm}
          ></ConfirmModal>
        )}
      </MyShop>
    </>
  );
}

export default ShopRegisterFormPage;
