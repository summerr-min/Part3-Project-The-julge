import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '@/api/auth';

import AuthLayout, {
  ErrorText,
  Field,
  Footer,
  Form,
  Input,
  Label,
  PrimaryButton,
} from '@/components/Auth/AuthLayout';

import AlertModal from '@/components/common/Modal/AuthModal';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  // 회원가입 입력 폼 입력값 검증
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

  // 로그인 버튼 활성화 조건
  const canSubmit =
    email.trim().length > 0 &&
    password.trim().length > 0 &&
    !emailError &&
    !passwordError;

  // 로그인 실패 시 알림 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalMessage('');
  };

  // 이메일 입력 변경 처리
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(null);
  };

  // 비밀번호 입력 변경 처리
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(null);
  };

  // 이메일 입력값 blur 시 유효성 검사
  const handleEmailBlur = () => {
    validate();
  };

  // 비밀번호 입력값 blur 시 유효성 검사
  const handlePasswordBlur = () => {
    validate();
  };

  // 로그인 제출 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await signIn({
        email: email.trim(),
        password,
      });

      navigate('/noticeList');
    } catch (err: unknown) {
      setModalMessage('비밀번호가 일치하지 않습니다.');
      setIsModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="입력"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            $error={!!emailError}
          />
          {emailError && <ErrorText>{emailError}</ErrorText>}
        </Field>

        <Field>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            placeholder="입력"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            $error={!!passwordError}
          />
          {passwordError && <ErrorText>{passwordError}</ErrorText>}
        </Field>

        <PrimaryButton type="submit" disabled={!canSubmit || isSubmitting}>
          로그인 하기
        </PrimaryButton>
      </Form>

      <Footer>
        <span>회원이 아니신가요?</span>
        <Link to="/signup">회원가입하기</Link>
      </Footer>

      {isModalOpen && (
        <AlertModal message={modalMessage} onClose={handleCloseModal} />
      )}
    </AuthLayout>
  );
};

export default Login;
