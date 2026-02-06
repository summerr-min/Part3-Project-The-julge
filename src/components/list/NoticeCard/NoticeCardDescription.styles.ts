import styled from 'styled-components';

export const Wrapper = styled.div<{ isClosed: boolean }>`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${({ isClosed, theme }) =>
    isClosed ? theme.colors.gray30 : theme.colors.gray50};

  @media (min-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`;
