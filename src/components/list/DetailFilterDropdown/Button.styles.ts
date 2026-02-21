import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 8rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: 0.1rem solid ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  border-radius: 0.6rem;
`;

export const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 0;
  width: 100%;
  flex-shrink: 1;
  min-width: 8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  border-radius: 0.6rem;
`;
