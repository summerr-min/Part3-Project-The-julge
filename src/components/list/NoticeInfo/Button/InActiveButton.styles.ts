import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.gray40};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.6rem;

  @media (min-width: 768px) {
    padding: 1.4rem 13.6rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2rem;
  }

  @media (min-width: 1200px) {
    padding: 1.4rem 13.6rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;
