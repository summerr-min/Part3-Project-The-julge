import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  padding: 4rem 0 8rem;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }

  @media (min-width: 1200px) {
    padding: 6rem 0 12rem;
  }
`;

export const SectionName = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};

  padding-left: 20px;
`;
