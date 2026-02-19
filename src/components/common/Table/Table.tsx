import type { ReactNode } from 'react';
import { useState } from 'react';
import * as S from './Table.styles';
import Pagination from '@/components/common/Pagination/Pagination';

export type TableHeader = {
  key: string;
  label: string;
};

type TableProps = {
  className?: string;
  headers: TableHeader[];
  leftChildren: ReactNode;
  rightChildren: ReactNode;
  dataLength: number;
  fixedRowCount?: number;
  totalPages: number;
  currentPage?: number;
  onChangePage?: (page: number) => void;
};

export default function Table({
  className,
  headers,
  leftChildren,
  rightChildren,
  dataLength,
  fixedRowCount = 5,
  totalPages,
  currentPage,
  onChangePage,
}: TableProps) {
  const [innerPage, setInnerPage] = useState(1);
  const page = currentPage ?? innerPage;

  const handleChangePage = (nextPage: number) => {
    if (onChangePage) {
      onChangePage(nextPage);
      return;
    }
    setInnerPage(nextPage);
  };

  const leftHeaders: TableHeader[] = [];
  let statusHeader: TableHeader | undefined;

  for (const h of headers) {
    if (h.key === 'status') statusHeader = h;
    else leftHeaders.push(h);
  }

  const emptyRowCount =
    dataLength < fixedRowCount ? fixedRowCount - dataLength : 0;

  const emptyRowIndexes: number[] = [];
  for (let i = 0; i < emptyRowCount; i++) {
    emptyRowIndexes.push(i);
  }

  return (
    <S.WrapperStyles className={className}>
      <S.LayoutStyles>
        <S.ScrollAreaStyles>
          <S.TableStyles>
            <S.TheadStyles>
              <tr>
                {leftHeaders.map((h) => (
                  <S.ThStyles key={h.key}>{h.label}</S.ThStyles>
                ))}
              </tr>
            </S.TheadStyles>

            <tbody>
              {leftChildren}

              {emptyRowIndexes.map((i) => (
                <tr key={`empty-left-${i}`}>
                  {leftHeaders.map((h) => (
                    <S.TdStyles key={`empty-left-${i}-${h.key}`} />
                  ))}
                </tr>
              ))}
            </tbody>
          </S.TableStyles>
        </S.ScrollAreaStyles>

        <S.FixedAreaStyles>
          <S.FixedTableStyles>
            <S.FixedTheadStyles>
              <tr>
                <S.StatusThStyles>
                  {statusHeader ? statusHeader.label : ''}
                </S.StatusThStyles>
              </tr>
            </S.FixedTheadStyles>

            <tbody>
              {rightChildren}

              {emptyRowIndexes.map((i) => (
                <tr key={`empty-right-${i}`}>
                  <S.StatusTdStyles />
                </tr>
              ))}
            </tbody>
          </S.FixedTableStyles>
        </S.FixedAreaStyles>
      </S.LayoutStyles>

      <S.PaginationWrapperStyles>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageClick={handleChangePage}
        />
      </S.PaginationWrapperStyles>
    </S.WrapperStyles>
  );
}