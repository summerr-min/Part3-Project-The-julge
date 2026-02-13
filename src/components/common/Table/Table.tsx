import type { ReactNode } from 'react';
import * as S from './Table.styles';

// 각 페이지에서 headers 배열로 만들어서 넘겨줌
export type TableHeader = {
  key: string;
  label: string;
};

type TableProps = {
  headers: TableHeader[];
  children: ReactNode;
  dataLength: number;
  fixedRowCount?: number;
};

export default function Table({
  headers,
  children,
  dataLength,
  fixedRowCount = 5, // 기본 5줄 고정
}: TableProps) {
  // 5줄이 안될 때 빈 줄 채우기
  let emptyRowCount = 0;

  if (dataLength < fixedRowCount) {
    emptyRowCount = fixedRowCount - dataLength;
  }

  const emptyRows: number[] = [];
  for (let i = 0; i < emptyRowCount; i++) {
    emptyRows.push(i);
  }

  return (
    <S.WrapperStyles>
      <S.TableStyles>
        <S.TheadStyles>
          <tr>
            {headers.map((header) => (
              <S.ThStyles key={header.key}>{header.label}</S.ThStyles>
            ))}
          </tr>
        </S.TheadStyles>

        <tbody>
          {children}

          {emptyRows.map((index) => (
            <tr key={`empty-row-${index}`}>
              {headers.map((header) => (
                <S.TdStyles key={`empty-${index}-${header.key}`} />
              ))}
            </tr>
          ))}
        </tbody>
      </S.TableStyles>
    </S.WrapperStyles>
  );
}
