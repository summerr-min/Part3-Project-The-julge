import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { updataMyProfile } from '@/api/user';
import { ProfileContext } from '@/contexts/ProfileContext';
import { UserInfo, SeoulAddress } from '@/types/user.types';

export const useProfileForm = () => {
  const navigate = useNavigate();
  const profile = useContext(ProfileContext);
  const data = profile?.profileData as UserInfo | undefined; // 기존 프로필 데이터 가져오기

  // 입력 상태 관리 기존데이터 있으면 data false=> 빈값
  const [formData, setFormData] = useState({
    name: data?.name || '',
    phone: data?.phone || '',
    bio: data?.bio || '',
  });

  const [selectLocation, setSelectLocation] = useState<SeoulAddress | string>(
    data?.address || ''
  );
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [modal, setModal] = useState({ isOpen: false, message: '' });

  // 연락처 정규식
  const phoneRegex = /^010-\d{4}-\d{4}$/;

  // 2. 입력 핸들러 Input, TextArea 공용
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((oldData) => ({
      ...oldData, // 기존 상태 유지
      [name]: value,
    }));
  };

  // 개별 필드 유효성 검사
  const checkError = (name: string, value: string) => {
    if (name === 'name') {
      const isValid = value.trim().length > 0;
      setErrors((oldData) => ({
        ...oldData,
        name: isValid ? '' : '이름을 입력해 주세요.',
      }));
      return isValid;
    }

    if (name === 'phone') {
      const isValid = phoneRegex.test(value);
      setErrors((oldData) => ({
        ...oldData,
        phone: isValid ? '' : '올바른 연락처 형식을 입력해 주세요.',
      }));
      return isValid;
    }
    return true;
  };

  // 폼 제출 핸들러 (서버 전송 및 Context 동기화)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 페이지 새로고침 방지

    // 제출 전 유효성 검사
    const isNameValid = checkError('name', formData.name);
    const isPhoneValid = checkError('phone', formData.phone);

    if (!isNameValid || !isPhoneValid) return false;

    try {
      const userId = localStorage.getItem('userId');
      if (!userId) return false;

      const response = await updataMyProfile(userId, {
        ...formData,
        address: selectLocation,
      });

      console.log('서버 응답 결과:', response);

      if (profile?.checkProfileFromServer) {
        await profile.checkProfileFromServer();
      }

      setModal({ isOpen: true, message: '등록이 완료되었습니다!' });
      return true;
    } catch (error) {
      console.error('프로필 등록 실패:', error);
      setModal({
        isOpen: true,
        message: '등록에 실패했습니다. 다시 시도해 주세요.',
      });
      return false;
    }
  };

  const handleCloseModal = () => {
    setModal((oldData) => ({ ...oldData, isOpen: false }));

    if (modal.message.includes('완료')) {
      navigate('/profile/details');
    }
  };

  return {
    formData,
    errors,
    modal,
    selectLocation,
    setSelectLocation,
    handleChange,
    handleSubmit,
    handleCloseModal,
    checkError,
  };
};
