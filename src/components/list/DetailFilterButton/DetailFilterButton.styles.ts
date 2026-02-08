import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.red30};
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
`;
