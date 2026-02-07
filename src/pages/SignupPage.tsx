import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '@/api/auth';
import CheckIcon from '@/assets/icons/check_icon.svg?react';
import axios from 'axios';

import AuthLayout, {
  ErrorText,
  Field,
  Footer,
  Form,
  Icon,
  Input,
  Label,
  PrimaryButton,
  ToggleButton,
  ToggleRow,
  ToggleWrap,
} from '@/components/Auth/AuthLayout';

import AuthModal from '@/components/common/Modal/AuthModal';

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

  // 유효성 검사
  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  //  전체 입력값 검증(빈 값은 버튼 비활성화, submit 차단)
  const validate = () => {
    let hasError = false;

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedPasswordConfirm = passwordConfirm.trim();

    // 이메일 검증
    if (trimmedEmail.length === 0) {
      setEmailError(null);
      hasError = true;
    } else if (!isValidEmail(trimmedEmail)) {
      setEmailError('이메일 형식으로 작성해주세요.');
      hasError = true;
    } else {
      setEmailError(null);
    }

    // 비밀번호 검증
    if (trimmedPassword.length === 0) {
      setPasswordError(null);
      hasError = true;
    } else if (trimmedPassword.length < 8) {
      setPasswordError('8자 이상 입력해주세요.');
      hasError = true;
    } else {
      setPasswordError(null);
    }

    // 비밀번호 확인 검증
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

  // input change 핸들러
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError(null);
    if (passwordConfirmError) setPasswordConfirmError(null);
  };

  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(e.target.value);
    if (passwordConfirmError) setPasswordConfirmError(null);
  };

  // blur에서 전체 검증(제출 전 바로 피드백)
  const handleEmailBlur = () => validate();
  const handlePasswordBlur = () => validate();
  const handlePasswordConfirmBlur = () => validate();

  // 회원 유형 선택
  const handleEmployeeClick = () => setUserType('employee');
  const handleEmployerClick = () => setUserType('employer');

  // 모달
  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
    setErrorModalMessage('');
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
    setSuccessModalMessage('');
    navigate('/login');
  };

  // 회원가입 제출
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
        setIsErrorModalOpen(true);
      }
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

        <Field>
          <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
          <Input
            id="passwordConfirm"
            type="password"
            placeholder="입력"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
            onBlur={handlePasswordConfirmBlur}
            $error={!!passwordConfirmError}
          />
          {passwordConfirmError && (
            <ErrorText>{passwordConfirmError}</ErrorText>
          )}
        </Field>

        <ToggleWrap>
          <Label as="div">회원 유형</Label>
          <ToggleRow>
            <ToggleButton
              type="button"
              $active={userType === 'employee'}
              onClick={handleEmployeeClick}
            >
              <Icon $active={userType === 'employee'}>
                {userType === 'employee' && <CheckIcon />}
              </Icon>
              알바님
            </ToggleButton>

            <ToggleButton
              type="button"
              $active={userType === 'employer'}
              onClick={handleEmployerClick}
            >
              <Icon $active={userType === 'employer'}>
                {userType === 'employer' && <CheckIcon />}
              </Icon>
              사장님
            </ToggleButton>
          </ToggleRow>
        </ToggleWrap>

        <PrimaryButton type="submit" disabled={!canSubmit || isSubmitting}>
          가입하기
        </PrimaryButton>
      </Form>

      <Footer>
        <span>이미 가입하셨나요?</span>
        <Link to="/login">로그인하기</Link>
      </Footer>

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
