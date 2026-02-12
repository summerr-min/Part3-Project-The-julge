import React, { useCallback, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signUp } from '@/api/auth';
import CheckIcon from '@/assets/icons/check_icon.svg?react';

import AuthLayout from '@/components/Auth/AuthLayout';
import * as A from '@/components/Auth/AuthLayout.styles';

import Button from '@/components/common/Button/Button';
import AuthModal from '@/components/common/Modal/Modal';

type UserType = 'employee' | 'employer';

type FieldProps = {
  id: string;
  label: string;
  type: string;
  value: string;
  error: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
};

const Field = React.memo(function Field({
  id,
  label,
  type,
  value,
  error,
  onChange,
  onBlur,
}: FieldProps) {
  return (
    <A.FieldStyles>
      <A.LabelStyles htmlFor={id}>{label}</A.LabelStyles>
      <A.InputStyles
        id={id}
        type={type}
        placeholder="입력"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        $error={!!error}
      />
      {error && <A.ErrorTextStyles>{error}</A.ErrorTextStyles>}
    </A.FieldStyles>
  );
});

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

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
  const [passwordConfirmError, setPasswordConfirmError] = useState<
    string | null
  >(null);

  // 제출 상태
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 모달
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState('');

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successModalMessage, setSuccessModalMessage] = useState('');

  const validateEmail = useCallback((raw: string) => {
    const v = raw.trim();
    if (v.length === 0) return '이메일을 입력해주세요.';
    if (!isValidEmail(v)) return '이메일 형식으로 작성해주세요.';
    return null;
  }, []);

  const validatePassword = useCallback((raw: string) => {
    const v = raw.trim();
    if (v.length === 0) return '비밀번호를 입력해주세요.';
    if (v.length < 8) return '8자 이상 입력해주세요.';
    return null;
  }, []);

  const validatePasswordConfirm = useCallback(
    (pwRaw: string, confirmRaw: string) => {
      const pw = pwRaw.trim();
      const confirm = confirmRaw.trim();

      if (confirm.length === 0) return '비밀번호 확인을 입력해주세요.';
      if (pw !== confirm) return '비밀번호가 일치하지 않습니다.';
      return null;
    },
    []
  );

  // 버튼 활성화 조건
  const canSubmit = useMemo(() => {
    return (
      email.trim().length > 0 &&
      password.trim().length > 0 &&
      passwordConfirm.trim().length > 0 &&
      !emailError &&
      !passwordError &&
      !passwordConfirmError
    );
  }, [
    email,
    password,
    passwordConfirm,
    emailError,
    passwordError,
    passwordConfirmError,
  ]);

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (emailError) setEmailError(null);
    },
    [emailError]
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      setPassword(next);

      if (passwordError) setPasswordError(null);
      if (passwordConfirmError) setPasswordConfirmError(null);
    },
    [passwordError, passwordConfirmError]
  );

  const handlePasswordConfirmChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordConfirm(e.target.value);
      if (passwordConfirmError) setPasswordConfirmError(null);
    },
    [passwordConfirmError]
  );

  const handleEmailBlur = useCallback(() => {
    setEmailError(validateEmail(email));
  }, [email, validateEmail]);

  const handlePasswordBlur = useCallback(() => {
    setPasswordError(validatePassword(password));
  }, [password, validatePassword]);

  const handlePasswordConfirmBlur = useCallback(() => {
    setPasswordConfirmError(validatePasswordConfirm(password, passwordConfirm));
  }, [password, passwordConfirm, validatePasswordConfirm]);

  const handleEmployeeClick = useCallback(() => setUserType('employee'), []);
  const handleEmployerClick = useCallback(() => setUserType('employer'), []);

  const handleCloseErrorModal = useCallback(() => {
    setIsErrorModalOpen(false);
    setErrorModalMessage('');
  }, []);

  const handleCloseSuccessModal = useCallback(() => {
    setIsSuccessModalOpen(false);
    setSuccessModalMessage('');
    navigate('/login');
  }, [navigate]);

  const validateAll = useCallback(() => {
    const nextEmailError = validateEmail(email);
    const nextPasswordError = validatePassword(password);
    const nextPasswordConfirmError = validatePasswordConfirm(
      password,
      passwordConfirm
    );

    setEmailError(nextEmailError);
    setPasswordError(nextPasswordError);
    setPasswordConfirmError(nextPasswordConfirmError);

    return !nextEmailError && !nextPasswordError && !nextPasswordConfirmError;
  }, [
    email,
    password,
    passwordConfirm,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
  ]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSubmitting) return;
      if (!validateAll()) return;

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
    },
    [email, password, userType, isSubmitting, validateAll]
  );

  return (
    <AuthLayout>
      <A.FormStyles onSubmit={handleSubmit}>
        <Field
          id="email"
          label="이메일"
          type="email"
          value={email}
          error={emailError}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />

        <Field
          id="password"
          label="비밀번호"
          type="password"
          value={password}
          error={passwordError}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />

        <Field
          id="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          value={passwordConfirm}
          error={passwordConfirmError}
          onChange={handlePasswordConfirmChange}
          onBlur={handlePasswordConfirmBlur}
        />

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
        <AuthModal
          message={errorModalMessage}
          onClose={handleCloseErrorModal}
        />
      )}

      {isSuccessModalOpen && (
        <AuthModal
          message={successModalMessage}
          onClose={handleCloseSuccessModal}
        />
      )}
    </AuthLayout>
  );
};

export default Signup;
