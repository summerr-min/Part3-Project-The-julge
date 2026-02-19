import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 35rem;

  @media (min-width: 768px) {
    width: 33rem;
  }

  @media (min-width: 1200px) {
    width: 30.8rem;
  }
`;

export const Name = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  margin-bottom: 0.8rem;
`;

export const Input = styled.input`
  display: flex;
  gap: 1rem;
  align-items: center;
  align-self: stretch;
  padding: 1.6rem 2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray30};
  width: 100%;
  max-width: 35rem;
  background: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 0.6rem;
`;
