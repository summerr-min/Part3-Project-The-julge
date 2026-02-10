import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updataMyProfile } from '@/api/user';

interface ProfileFormData {
  name: string;
  phone: string;
  bio: string;
}

export const useProfileForm = () => {
  const navigate = useNavigate();

  // 상태 관리
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    phone: '',
    bio: '',
  });

  const [selectLocation, setSelectLocation] = useState('');
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [modal, setModal] = useState({ isOpen: false, message: '' });

  // 연락처 정규식
  const phoneRegex = /^010-\d{4}-\d{4}$/;

  // 입력 핸들러
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((oldData) => ({
      ...oldData, // 이전 상태 복사함.
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

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = checkError('name', formData.name);
    const isPhoneValid = checkError('phone', formData.phone);

    if (!isNameValid || !isPhoneValid) return;

    try {
      const userId = localStorage.getItem('userId');
      if (!userId) return;

      // API 호출 시 formData 객체 전달 또는 가공
      await updataMyProfile(userId, {
        ...formData, // name, phone, bio
        address: selectLocation,
      });

      setModal({ isOpen: true, message: '등록이 완료되었습니다!' });
    } catch (error) {
      console.error('프로필 등록 실패:', error);
      setModal({
        isOpen: true,
        message: '등록에 실패했습니다. 다시 시도해 주세요.',
      });
    }
  };

  const handleCloseModal = () => {
    setModal((oldData) => ({ ...oldData, isOpen: false }));
    if (modal.message.includes('완료')) {
      navigate('/profile'); // 추후 변경
    }
  };

  return {
    formData,
    errors,
    modal,
    setSelectLocation,
    handleChange,
    handleSubmit,
    handleCloseModal,
    checkError,
  };
};
