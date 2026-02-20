import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.6rem;
  border-style: solid;
`;
