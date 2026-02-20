import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '@/api/auth';
import { useAuth } from '@/hooks/useAuth';

import AuthLayout from '@/components/Auth/AuthLayout';
import * as A from '@/components/Auth/AuthLayout.styles';
import Button from '@/components/common/Button/Button';

import AlertModal from '@/components/common/Modal/Modal';

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

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validate = () => {
    let hasError = false;

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

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

    return !hasError;
  };

  const canSubmit =
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    !emailError &&
    !passwordError;

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalMessage('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(null);
  };

  const handleEmailBlur = () => {
    validate();
  };

  const handlePasswordBlur = () => {
    validate();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) return;

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
          {passwordError && (
            <A.ErrorTextStyles>{passwordError}</A.ErrorTextStyles>
          )}
        </A.FieldStyles>

        <A.ButtonRowStyles>
          <Button preset="default" variant="primary" type="submit" disabled={!canSubmit || isSubmitting}>
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