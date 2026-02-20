import { useState } from 'react';
import styled from 'styled-components';
import Table, { type TableHeader } from '@/components/common/Table/Table';
import * as S from '@/components/common/Table/Table.styles';

const ButtonRowStyles = styled.div`
  display: flex;
  gap: 8px;
`;

const OutlineButtonStyles = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 92px;
  height: 38px;

  padding: 10px 20px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: transparent;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;

  cursor: pointer;
`;

type Row = {
  id: string;
  shop: string;
  date: string;
  pay: string;
  status: '승인 완료' | '거절' | '대기중';
};

const headers: TableHeader[] = [
  { key: 'shop', label: '가게' },
  { key: 'date', label: '일자' },
  { key: 'pay', label: '시급' },
  { key: 'status', label: '상태' },
];

const rows: Row[] = [
  {
    id: '1',
    shop: 'HS 과일주스',
    date: '2023-01-12 10:00 ~ 12:00 (2시간)',
    pay: '15,000원',
    status: '승인 완료',
  },
  {
    id: '2',
    shop: '써니 브런치 레스토랑',
    date: '2023-01-12 10:00 ~ 12:00 (2시간)',
    pay: '15,000원',
    status: '거절',
  },
  {
    id: '3',
    shop: '수리 에스프레소 샵',
    date: '2023-01-12 10:00 ~ 12:00 (2시간)',
    pay: '15,000원',
    status: '대기중',
  },
  {
    id: '4',
    shop: '너구리네 라면집',
    date: '2023-01-12 10:00 ~ 12:00 (2시간)',
    pay: '15,000원',
    status: '대기중',
  },
  {
    id: '5',
    shop: '초가을집',
    date: '2023-01-12 10:00 ~ 12:00 (2시간)',
    pay: '15,000원',
    status: '승인 완료',
  },
];

export default function TableSplitTestPage() {
  const [page, setPage] = useState(1);

  const pageSize = 5;
  const totalPages = Math.ceil(rows.length / pageSize);
  const pagedRows = rows.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div style={{ padding: 24 }}>
      <Table
        headers={headers}
        dataLength={pagedRows.length}
        fixedRowCount={5}
        totalPages={totalPages}
        currentPage={page}
        onChangePage={setPage}
        leftChildren={
          <>
            {pagedRows.map((r) => (
              <tr key={r.id}>
                <S.TdStyles>{r.shop}</S.TdStyles>
                <S.TdStyles>{r.date}</S.TdStyles>
                <S.TdStyles>{r.pay}</S.TdStyles>
              </tr>
            ))}
          </>
        }
  rightChildren={
  <>
    {pagedRows.map((r) => (
      <tr key={r.id}>
        <S.StatusTdStyles>
          {r.status === '대기중' ? (
            <ButtonRowStyles>
              <OutlineButtonStyles>수정</OutlineButtonStyles>
              <OutlineButtonStyles>완료</OutlineButtonStyles>
            </ButtonRowStyles>
          ) : (
            <span>{r.status}</span>
          )}
        </S.StatusTdStyles>
      </tr>
    ))}
  </>
}
      />
    </div>
  );
}