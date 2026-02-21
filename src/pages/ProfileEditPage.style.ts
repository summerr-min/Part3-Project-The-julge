import styled from 'styled-components';
import Button from '@/components/common/Button/Button';
import { breakpoints } from '@/pages/profileCommom.style';

// 공통 스타일
export { PageContainer } from '@/pages/profileCommom.style';

// 타이틀 + 닫기 버튼 같은 줄에 배치
export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 24px;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${breakpoints.mobile}) {
    ${({ theme }) => theme.fonts.h3};
  }
`;

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// == 폼 전체 감싸는 컨테이너
export const FormContainer = styled.form`
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0;
  }
`;

// == 이름, 연락처, 선호지역 3열
export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
export const BioWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 351px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 8px;
  }
`;
export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 90px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 32px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 351px;
    margin-bottom: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 351px;
    margin: 0 auto;
  }
`;

// 라벨 (이름, 연락처, 선호지역, 소개)
export const Label = styled.label`
  ${({ theme }) => theme.fonts.body1Regular};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 8px;
`;

export const InputField = styled.input`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 6px;
  ${({ theme }) => theme.fonts.body1Regular};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

export const TextAreaField = styled.textarea`
  height: 153px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 6px;
  resize: none;

  ${({ theme }) => theme.fonts.body1Regular};
`;

// 등록하기 버튼 (공통 버튼)
export const SubmitButton = styled(Button)`
  padding: 13.5px 110.5px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px 20px;
    width: 100%;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red40};
  font-size: 12px;
  margin-top: 4px;
`;
