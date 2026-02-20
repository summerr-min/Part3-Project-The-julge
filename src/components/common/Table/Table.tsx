import type { ReactNode } from 'react';
import { useLayoutEffect, useRef, useState } from 'react';
import Pagination from '@/components/common/Pagination/Pagination';
import * as S from './Table.styles';

export type TableHeader = {
  key: string;
  label: string;
};

type TableProps = {
  headers: TableHeader[];
  leftChildren: ReactNode;
  rightChildren: ReactNode;
  dataLength: number;
  fixedRowCount?: number;

  totalPages: number;
  currentPage?: number;
  onChangePage?: (page: number) => void;
};

// 같은 row 높이를 맞춰주기
function syncRowHeights(leftBody: HTMLTableSectionElement | null, rightBody: HTMLTableSectionElement | null) {
  if (!leftBody || !rightBody) return;

  const leftRows = Array.from(leftBody.querySelectorAll('tr'));
  const rightRows = Array.from(rightBody.querySelectorAll('tr'));
  const count = Math.min(leftRows.length, rightRows.length);

  // 기존에 설정된 height 초기화
  for (let i = 0; i < count; i += 1) {
    const l = leftRows[i] as HTMLTableRowElement;
    const r = rightRows[i] as HTMLTableRowElement;

    l.style.height = '';
    r.style.height = '';
  }

  // 높이를 비교해서 더 큰 값으로 맞추기
  for (let i = 0; i < count; i += 1) {
    const l = leftRows[i] as HTMLTableRowElement;
    const r = rightRows[i] as HTMLTableRowElement;

    const lh = l.getBoundingClientRect().height;
    const rh = r.getBoundingClientRect().height;

    const h = Math.max(lh, rh);

    l.style.height = `${h}px`;
    r.style.height = `${h}px`;
  }
}

export default function Table({
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

  const emptyRowCount = dataLength < fixedRowCount ? fixedRowCount - dataLength : 0;
  const emptyRows = Array.from({ length: emptyRowCount }, (_, i) => i);

  const leftHeaders = headers.filter((h) => h.key !== 'status');
  const statusHeader = headers.find((h) => h.key === 'status');

  const leftTbodyRef = useRef<HTMLTableSectionElement | null>(null);
  const rightTbodyRef = useRef<HTMLTableSectionElement | null>(null);

  useLayoutEffect(() => {
    const leftBody = leftTbodyRef.current;
    const rightBody = rightTbodyRef.current;

    if (!leftBody || !rightBody) return;

    const run = () => syncRowHeights(leftBody, rightBody);

    const raf = requestAnimationFrame(run);

    const ro = new ResizeObserver(() => run());
    ro.observe(leftBody);
    ro.observe(rightBody);

    const onResize = () => run();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [
    page,
    dataLength,
    fixedRowCount,
    leftChildren,
    rightChildren,
  ]);

  return (
    <>
      <S.WrapperStyles>
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

              <tbody ref={leftTbodyRef}>
                {leftChildren}
                {emptyRows.map((i) => (
                  <tr key={`empty-left-${i}`}>
                    <S.TdStyles />
                    <S.TdStyles />
                    <S.TdStyles />
                  </tr>
                ))}
              </tbody>
            </S.TableStyles>
          </S.ScrollAreaStyles>

          <S.FixedAreaStyles>
            <S.FixedTableStyles>
              <S.FixedTheadStyles>
                <tr>
                  <S.StatusThStyles>{statusHeader?.label ?? ''}</S.StatusThStyles>
                </tr>
              </S.FixedTheadStyles>

              <tbody ref={rightTbodyRef}>
                {rightChildren}
                {emptyRows.map((i) => (
                  <tr key={`empty-right-${i}`}>
                    <S.StatusTdStyles />
                  </tr>
                ))}
              </tbody>
            </S.FixedTableStyles>
          </S.FixedAreaStyles>
        </S.LayoutStyles>
          <S.PaginationWrapperStyles>
        <Pagination totalPages={totalPages} currentPage={page} onPageClick={handleChangePage} />
      </S.PaginationWrapperStyles>
      </S.WrapperStyles>

    
    </>
  );
}