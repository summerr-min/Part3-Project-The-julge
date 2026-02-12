import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-direction: column;
  min-width: 35.1rem;

  @media (min-width: 768px) {
    gap: 3.2rem;
    min-width: 68rem;
  }

  @media (min-width: 1200px) {
    gap: 3.2rem;
    min-width: 96.4rem;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const SectionName = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--black);
  letter-spacing: 0.056rem;
`;
