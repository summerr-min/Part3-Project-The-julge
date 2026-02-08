import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@/assets/icons/close_icon.svg?react';
import * as S from '@/pages/ProfilePage.style';
import Dropdown from '@/components/user/Dropdown/Dropdown';
import { SEOUL_DISTRICTS } from '@/constants/locations';
interface ProfileFormData {
  name: string;
  phone: string;
  bio: string;
}

interface ProfileErrors {
  name: string;
  phone: string;
}

function ProfileEditPage() {
  const navigate = useNavigate();
  const [selectLocation, setSelectLocation] = useState('');
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    phone: '',
    bio: '',
  });
  const [errors, setErrors] = useState<ProfileErrors>({ name: '', phone: '' });

  const phoneRegex = /^010-\d{4}-\d{4}$/; // 연락처 정규식

  const validate = () => {
    const newErrors = { name: '', phone: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해 주세요.';
      isValid = false;
    }
    // 연락처 체크
    if (!formData.phone.trim()) {
      newErrors.phone = '연락처를 입력해 주세요.';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = '올바른 연락처 형식을 입력해 주세요.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid; // 성공 여부 반환
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 새로고침 막기

    // 2. 제출 시 유효성 검사 실행
    if (!validate()) return;

    console.log('등록 데이터:', formData, selectLocation);
    navigate('/profile');
  };
  // 3. Input값 변경 핸들러
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // : 프로필 등록 API 호출 넣어야함
    console.log('선택된 지역:', selectLocation);
    // 임시: 등록 완료 후 프로필 목록으로
    //navigate('/profile');
  };

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
              onBlur={validate} // 입력창 벗어날 떄 체크
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
              onBlur={validate} // 입력창 벗어날 떄 체크
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
          <S.TextAreaField placeholder="입력" />
          <div style={{ textAlign: 'center' }}>
            <S.SubmitButton type="submit">등록하기</S.SubmitButton>
          </div>
        </S.InputWrapper>
      </S.FormContainer>
    </S.PageContainer>
  );
}

export default ProfileEditPage;
