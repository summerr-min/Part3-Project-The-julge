import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
`;

export const AddressContainer = styled.ul`
  display: grid;
  gap: 2rem;
  padding: 1.6rem 2.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray20};
  overflow-y: scroll;
  height: 25.8rem;
  grid-template-columns: repeat(2, 1fr);

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    border: 0.2rem solid transparent;
    background-color: hsl(0, 0%, 67%);
    background-clip: padding-box;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.red30};
  }

  &::-webkit-scrollbar-track {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const AddressItem = styled.li`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const AddressBadgeContainer = styled.ul`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;
