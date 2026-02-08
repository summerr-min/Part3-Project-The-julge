import styled from 'styled-components';

/* == 페이지 컨테이너  */
export const PageContainer = styled.div`
  justify-content: center;
  margin: 0 auto;
  padding: 60px 238px;
`;
/* == 내 프로필  ==  */
export const Title = styled.h2`
  ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 32px;
`;

export const EmptyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 12px;
  padding: 60px;

  p {
    ${({ theme }) => theme.fonts.body1Regular};
    margin-bottom: 24px;

    color: ${({ theme }) => theme.colors.black};
  }
`;

// == 폼 전체 감싸는 컨테이너
export const FormContainer = styled.form`
  position: relative; // 닫기버튼 기준
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// == 입력창 감싸는 래퍼
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
// == 이름, 연락처, 선호지역 3열
export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
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
    color:${({ theme }) => theme.colors.gray40};
`;

export const TextAreaField = styled.textarea`
  height: 153px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  border-radius: 6px;
  resize: none;
  margin-bottom: 80px;
  ${({ theme }) => theme.fonts.body1Regular};
`;

export const SubmitButton = styled.button`
  background-color: #ea3c12;
  color: ${({ theme }) => theme.colors.white};
  padding: 14px 126.5px;
  border-radius: 6px;
  text-align: center;
  ${({ theme }) => theme.fonts.body1Bold};
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red40};
  font-size: 12px;
  margin-top: 4px;
`;
