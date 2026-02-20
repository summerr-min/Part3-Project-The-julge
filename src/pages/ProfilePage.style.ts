import styled from 'styled-components';
import Button from '@/components/common/Button/Button';
import { breakpoints } from '@/pages/profileCommom.style';

// 공통 스타일
export { PageContainer, Title } from '@/pages/profileCommom.style';

export const ProfileButton = styled(Button)`
  padding: 13.5px 110.5px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px 20px;
    width: 100%;
  }
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

    @media (max-width: ${breakpoints.mobile}) {
      ${({ theme }) => theme.fonts.body2Regular};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    ${({ theme }) => theme.fonts.body2Regular};

    padding: 60px 24px;
  }
`;
