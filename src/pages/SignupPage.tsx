import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signUp } from '@/api/auth';
import CheckIcon from '@/assets/icons/check_icon.svg?react';

import AuthLayout from '@/components/Auth/AuthLayout';
import * as A from '@/components/Auth/AuthLayout.styles';

import Button from '@/components/common/Button/Button';
import AuthModal from '@/components/common/Modal/Modal';

type UserType = 'employee' | 'employer';

const Signup = () => {
  const navigate = useNavigate();

  // 입력값 상태
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [userType, setUserType] = useState<UserType>('employee');

  // 에러 상태
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordConfirmError, setPasswordConfirmError] = useState<string | null>(
    null
  );

  // 제출 상태
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 모달
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState('');

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successModalMessage, setSuccessModalMessage] = useState('');

  // 유효성 검사
  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validate = () => {
    let hasError = false;

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedPasswordConfirm = passwordConfirm.trim();

    if (trimmedEmail.length === 0) {
      setEmailError(null);
      hasError = true;
    } else if (!isValidEmail(trimmedEmail)) {
      setEmailError('이메일 형식으로 작성해주세요.');
      hasError = true;
    } else {
      setEmailError(null);
    }

    if (trimmedPassword.length === 0) {
      setPasswordError(null);
      hasError = true;
    } else if (trimmedPassword.length < 8) {
      setPasswordError('8자 이상 입력해주세요.');
      hasError = true;
    } else {
      setPasswordError(null);
    }

    if (trimmedPasswordConfirm.length === 0) {
      setPasswordConfirmError(null);
      hasError = true;
    } else if (trimmedPassword !== trimmedPasswordConfirm) {
      setPasswordConfirmError('비밀번호가 일치하지 않습니다.');
      hasError = true;
    } else {
      setPasswordConfirmError(null);
    }

    return !hasError;
  };

  // 버튼 활성화 조건
  const canSubmit =
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    passwordConfirm.trim().length > 0 &&
    !emailError &&
    !passwordError &&
    !passwordConfirmError;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(null);
    if (passwordConfirmError) setPasswordConfirmError(null);
  };

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
    if (passwordConfirmError) setPasswordConfirmError(null);
  };

  const handleEmailBlur = () => validate();
  const handlePasswordBlur = () => validate();
  const handlePasswordConfirmBlur = () => validate();

  const handleEmployeeClick = () => setUserType('employee');
  const handleEmployerClick = () => setUserType('employer');

  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
    setErrorModalMessage('');
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setSuccessModalMessage('');
    navigate('/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await signUp({
        email: email.trim(),
        password,
        type: userType,
      });

      setSuccessModalMessage('가입이 완료되었습니다!');
      setIsSuccessModalOpen(true);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.status === 409) {
        setErrorModalMessage('이미 사용중인 이메일입니다.');
      } else {
        setErrorModalMessage('회원가입에 실패했습니다.');
      }
      setIsErrorModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <A.FormStyles onSubmit={handleSubmit}>
        <A.FieldStyles>
          <A.LabelStyles htmlFor="email">이메일</A.LabelStyles>
          <A.InputStyles
            id="email"
            type="email"
            placeholder="입력"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            $error={!!emailError}
          />
          {emailError && <A.ErrorTextStyles>{emailError}</A.ErrorTextStyles>}
        </A.FieldStyles>

        <A.FieldStyles>
          <A.LabelStyles htmlFor="password">비밀번호</A.LabelStyles>
          <A.InputStyles
            id="password"
            type="password"
            placeholder="입력"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            $error={!!passwordError}
          />
          {passwordError && <A.ErrorTextStyles>{passwordError}</A.ErrorTextStyles>}
        </A.FieldStyles>

        <A.FieldStyles>
          <A.LabelStyles htmlFor="passwordConfirm">비밀번호 확인</A.LabelStyles>
          <A.InputStyles
            id="passwordConfirm"
            type="password"
            placeholder="입력"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
            onBlur={handlePasswordConfirmBlur}
            $error={!!passwordConfirmError}
          />
          {passwordConfirmError && (
            <A.ErrorTextStyles>{passwordConfirmError}</A.ErrorTextStyles>
          )}
        </A.FieldStyles>

        <A.ToggleWrapStyles>
          <A.LabelStyles as="div">회원 유형</A.LabelStyles>

          <A.ToggleRowStyles>
            <A.ToggleButtonStyles
              type="button"
              $active={userType === 'employee'}
              onClick={handleEmployeeClick}
            >
              <A.IconStyles $active={userType === 'employee'}>
                {userType === 'employee' && <CheckIcon />}
              </A.IconStyles>
              알바님
            </A.ToggleButtonStyles>

            <A.ToggleButtonStyles
              type="button"
              $active={userType === 'employer'}
              onClick={handleEmployerClick}
            >
              <A.IconStyles $active={userType === 'employer'}>
                {userType === 'employer' && <CheckIcon />}
              </A.IconStyles>
              사장님
            </A.ToggleButtonStyles>
          </A.ToggleRowStyles>
        </A.ToggleWrapStyles>

        <A.ButtonRowStyles>
          <Button
            preset="default"
            variant="primary"
            type="submit"
            disabled={!canSubmit || isSubmitting}
          >
            가입하기
          </Button>
        </A.ButtonRowStyles>
      </A.FormStyles>

      <A.FooterStyles>
        <span>이미 가입하셨나요?</span>
        <Link to="/login">로그인하기</Link>
      </A.FooterStyles>

      {isErrorModalOpen && (
        <AuthModal message={errorModalMessage} onClose={handleCloseErrorModal} />
      )}

      {isSuccessModalOpen && (
        <AuthModal message={successModalMessage} onClose={handleCloseSuccessModal} />
      )}
    </AuthLayout>
  );
};

export default Signup;