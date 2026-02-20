import styled from 'styled-components';

const breakpoints = {
  tablet: '774px',
  mobile: '375px',
};

export { breakpoints };

// 페이지 컨테이너
export const PageContainer = styled.div`
  justify-content: center;
  margin: 0 auto;
  padding: 60px 238px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 60px 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 40px 12px 80px;
  }
`;

// 내 프로필 타이틀
export const Title = styled.h2`
  ${({ theme }) => theme.fonts.h1};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.mobile}) {
    ${({ theme }) => theme.fonts.h3};
    margin-bottom: 16px;
  }
`;

// 등록하기 버튼
export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 14px 126.5px;
  border-radius: 6px;
  text-align: center;
  ${({ theme }) => theme.fonts.body1Bold};
  white-space: nowrap;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;
