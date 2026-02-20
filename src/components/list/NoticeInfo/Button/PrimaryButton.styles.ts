import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1.4rem 2rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: 0.6rem;
  border: none;
`;
