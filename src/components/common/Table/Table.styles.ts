import styled from 'styled-components';

const tablet = `@media (max-width: 1024px)`;
const mobile = `@media (max-width: 767px)`;

export const WrapperStyles = styled.div`
  width: 100%;
  max-width: 964px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 10px;
  overflow: hidden;
`;

export const LayoutStyles = styled.div`
  display: flex;
  width: 100%;
`;

export const ScrollAreaStyles = styled.div`
  flex: 1 1 0;
  min-width: 0;
  overflow-x: visible;
  overflow-y: visible;

  ${tablet} {
    overflow-x: auto;
    overflow-y: hidden;
  }

  ${mobile} {
    flex: 0 0 50%;
    width: 50%;
  }
`;

export const FixedAreaStyles = styled.div`
  flex: 0 0 110px;
  width: 110px;
  min-width: 110px;
  max-width: 110px;

  ${mobile} {
    flex: 0 0 50%;
    width: 50%;
    min-width: 50%;
    max-width: 50%;
  }
`;

export const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
  white-space: normal;

  ${tablet} {
    width: max-content;
    min-width: 100%;
    white-space: nowrap;
  }
`;

export const FixedTableStyles = styled.table`
  width: 110px;
  min-width: 110px;
  max-width: 110px;
  table-layout: fixed;
  border-collapse: collapse;

  ${mobile} {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

export const TheadStyles = styled.thead`
  background: ${({ theme }) => theme.colors.red10};
`;

export const FixedTheadStyles = styled.thead`
  background: ${({ theme }) => theme.colors.red10};
`;

export const ThStyles = styled.th`
  height: 50px;
  padding: 14px 12px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray20};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.black};
`;

export const TdStyles = styled.td`
  height: 64px;
  padding: 20px 12px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray20};
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.black};
`;

export const StatusThStyles = styled.th`
  width: 110px;
  min-width: 110px;
  max-width: 110px;

  height: 50px;
  padding: 14px 12px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray20};

  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.red10};

  ${mobile} {
    width: 50%;
    min-width: 50%;
    max-width: 50%;
  }
`;

export const StatusTdStyles = styled.td`
  width: 110px;
  min-width: 110px;
  max-width: 110px;

  height: 64px;
  padding: 20px 12px;
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray20};

  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.black};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${mobile} {
    width: 50%;
    min-width: 50%;
    max-width: 50%;
  }
`;

export const PaginationWrapperStyles = styled.div`
  width: 100%;
  max-width: 964px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 12px;

  background: ${({ theme }) => theme.colors.white};
`;
