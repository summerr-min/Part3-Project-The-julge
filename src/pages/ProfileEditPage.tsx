import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CloseIcon from '@/assets/icons/close_icon.svg?react';
import * as S from '@/pages/ProfilePage.style';
import Dropdown from '@/components/user/Dropdown/Dropdown';
import { SEOUL_DISTRICTS } from '@/constants/locations';
import Modal from '@/components/common/Modal/Modal';
import { useProfileForm } from '@/hooks/useProfileForm';
import { AuthContext } from '@/contexts/AuthContext';

function ProfileEditPage() {
  const navigate = useNavigate();
  // 컨텍스트 데이터 가져오기
  const auth = useContext(AuthContext);

  // 사장님 접근 차단을 위한 로컬 모달 상태
  const [isEmployerModalOpen, setIsEmployerModalOpen] = useState(false);

  const {
    formData, // name,bio,phone
    errors, //유효성 검사 에러 문구
    modal: formModal, //객체 구조 분해 할당 별칭
    setSelectLocation,
    handleChange,
    handleSubmit, // 훅 전송 함수
    handleCloseModal,
    checkError,
  } = useProfileForm();

  // 사장님 체크 로직
  useEffect(() => {
    if (auth?.currentUser?.type === 'employer') {
      setIsEmployerModalOpen(true);
    }
  }, [auth?.currentUser]);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  return (
    <S.PageContainer>
      <S.Title>내 프로필</S.Title>
      <S.FormContainer onSubmit={handleSaveProfile}>
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
            <S.Label htmlFor="location-dropdown">선호지역</S.Label>
            <Dropdown
              id="location-dropdown" // label이랑 연결
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
      {/* 등록 결과 모달 (훅에서 관리) */}
      {formModal.isOpen && (
        <Modal message={formModal.message} onClose={handleCloseModal} />
      )}

      {/* 사장님 차단 모달 (이 페이지에서 관리) */}
      {isEmployerModalOpen && (
        <Modal
          message="알바님 전용 페이지 입니다. 사장님은 접근하실 수 없습니다."
          onClose={() => navigate('/')}
        />
      )}
    </S.PageContainer>
  );
}

export default ProfileEditPage;
