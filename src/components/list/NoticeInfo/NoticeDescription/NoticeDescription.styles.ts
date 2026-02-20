import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  padding: 3.2rem;
  background: ${({ theme }) => theme.colors.gray10};
  border-radius: 1.2rem;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
`;
