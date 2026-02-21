import React, { useCallback, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '@/api/auth';
import { useAuth } from '@/hooks/useAuth';

import AuthLayout from '@/components/Auth/AuthLayout';
import * as A from '@/components/Auth/AuthLayout.styles';
import Button from '@/components/common/Button/Button';
import AlertModal from '@/components/common/Modal/Modal';

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

const Login = () => {
  const navigate = useNavigate();
  const { login, refreshCurrentUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

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

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (emailError) setEmailError(null);
    },
    [emailError]
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      if (passwordError) setPasswordError(null);
    },
    [passwordError]
  );

  const handleEmailBlur = useCallback(() => {
    setEmailError(validateEmail(email));
  }, [email, validateEmail]);

  const handlePasswordBlur = useCallback(() => {
    setPasswordError(validatePassword(password));
  }, [password, validatePassword]);

  const validateAll = useCallback(() => {
    const nextEmailError = validateEmail(email);
    const nextPasswordError = validatePassword(password);

    setEmailError(nextEmailError);
    setPasswordError(nextPasswordError);

    return !nextEmailError && !nextPasswordError;
  }, [email, password, validateEmail, validatePassword]);

  const canSubmit = useMemo(() => {
    return (
      email.trim().length > 0 &&
      password.trim().length > 0 &&
      !emailError &&
      !passwordError
    );
  }, [email, password, emailError, passwordError]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setModalMessage('');
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (isSubmitting) return;

      if (!validateAll()) return;

      setIsSubmitting(true);

      try {
        const res = await signIn({
          email: email.trim(),
          password: password.trim(),
        });

        const token = res.item.token;
        const userId = res.item.user.item.id;

        login({ token, userId });
        await refreshCurrentUser();

        navigate('/notices');
      } catch (err: unknown) {
        setModalMessage('비밀번호가 일치하지 않습니다.');
        setIsModalOpen(true);
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      email,
      password,
      isSubmitting,
      validateAll,
      login,
      refreshCurrentUser,
      navigate,
    ]
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

        <A.ButtonRowStyles>
          <Button
            preset="default"
            variant="primary"
            type="submit"
            disabled={!canSubmit || isSubmitting}
          >
            로그인 하기
          </Button>
        </A.ButtonRowStyles>
      </A.FormStyles>

      <A.FooterStyles>
        <span>회원이 아니신가요?</span>
        <Link to="/signup">회원가입하기</Link>
      </A.FooterStyles>

      {isModalOpen && (
        <AlertModal message={modalMessage} onClose={handleCloseModal} />
      )}
    </AuthLayout>
  );
};

export default Login;
