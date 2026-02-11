import styled from 'styled-components';

export const Wrapper = styled.ul`
  position: absolute;
  top: 3.3rem;
  width: 10.5rem;
  height: 16rem;
  border-radius: 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray20};
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  box-shadow: 0 0.4rem 2.5rem 0 rgba(0, 0, 0, 0.1);
  overflow: initial;
`;

export const ButtonContainer = styled.li`
  width: 100%;
`;

export const Button = styled.button`
  padding: 1.2rem 0;
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray20};
  font-size: 1.4rem;
  line-height: 2.2rem;
  padding: 0.8rem 0;
`;
