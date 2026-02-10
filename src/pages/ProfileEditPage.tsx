import { useNavigate } from 'react-router-dom';
import CloseIcon from '@/assets/icons/close_icon.svg?react';
import * as S from '@/pages/ProfilePage.style';
import Dropdown from '@/components/user/Dropdown/Dropdown';
import { SEOUL_DISTRICTS } from '@/constants/locations';
import Modal from '@/components/common/Modal/Modal';
import { useProfileForm } from '@/hooks/useProfileForm';

function ProfileEditPage() {
  const navigate = useNavigate();

  const {
    formData, // name,bio,phone
    errors, //유효성 검사 에러 문구
    modal,
    setSelectLocation,
    handleChange,
    handleSubmit,
    handleCloseModal,
    checkError,
  } = useProfileForm();

  return (
    <S.PageContainer>
      <S.Title>내 프로필</S.Title>
      <S.FormContainer onSubmit={handleSubmit}>
        <S.CloseButton type="button" onClick={() => navigate('/profile')}>
          <CloseIcon />
        </S.CloseButton>

        <S.InputGroup>
          <S.InputWrapper>
            <S.Label>이름*</S.Label>
            <S.InputField
              placeholder="입력"
              name="name"
              value={formData.name}
              onChange={handleChange}
              // 포커스 나갔을 시 에러 체크
              onBlur={() => checkError('name', formData.name)}
            />
            {errors.name && <S.ErrorMessage>{errors.name}</S.ErrorMessage>}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>연락처*</S.Label>
            <S.InputField
              placeholder="입력"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => checkError('phone', formData.phone)}
            />
            {errors.phone && <S.ErrorMessage>{errors.phone}</S.ErrorMessage>}
          </S.InputWrapper>

          <S.InputWrapper>
            <S.Label>선호지역</S.Label>
            <Dropdown
              options={[...SEOUL_DISTRICTS]}
              placeholder="선택"
              onSelect={(item) => setSelectLocation(item)}
            />
          </S.InputWrapper>
        </S.InputGroup>

        <S.InputWrapper>
          <S.Label>소개</S.Label>
          <S.TextAreaField
            placeholder="입력"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
          <div style={{ textAlign: 'center' }}>
            <S.SubmitButton type="submit">등록하기</S.SubmitButton>
          </div>
        </S.InputWrapper>
      </S.FormContainer>
      {modal.isOpen && (
        <Modal message={modal.message} onClose={handleCloseModal} />
      )}
    </S.PageContainer>
  );
}

export default ProfileEditPage;
