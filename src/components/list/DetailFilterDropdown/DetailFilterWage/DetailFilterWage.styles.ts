import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: column;
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const Container = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  padding: 1.6rem 3.5rem 1.6rem 2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray30};
  width: 16.9rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.6rem;
`;

export const Won = styled.p`
  position: absolute;
  top: 50%;
  left: 13.4rem;
  transform: translateY(-51%);
`;

export const Description = styled.p``;
