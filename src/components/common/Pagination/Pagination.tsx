import * as S from './pagination.styles';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageClick: (page: number) => void;
};

const PAGE_BLOCK_SIZE = 7;

function getPages(currentPage: number, totalPages: number) {
  const pages: number[] = [];

  // 페이지가 7개 이하
  if (totalPages <= PAGE_BLOCK_SIZE) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // 처음 페이지
  if (currentPage <= 4) {
    for (let i = 1; i <= 7; i++) {
      pages.push(i);
    }
    return pages;
  }

  // 마지막 페이지
  if (currentPage >= totalPages - 3) {
    for (let i = totalPages - 6; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // 중간 구간 (currentPage가 가운데)
  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    pages.push(i);
  }

  return pages;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageClick,
}: PaginationProps) {
  const pages = getPages(currentPage, totalPages);

  // 페이지가 많을 때만 화살표 표시
  const showArrows = totalPages > PAGE_BLOCK_SIZE;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrev = () => {
    if (isFirstPage) return;
    // 이전 페이지 그룹으로 이동
    const prevPage = currentPage - PAGE_BLOCK_SIZE;
    onPageClick(prevPage < 1 ? 1 : prevPage);
  };

  const handleNext = () => {
    if (isLastPage) return;
    // 다음 페이지 그룹으로 이동
    const nextPage = currentPage + PAGE_BLOCK_SIZE;
    onPageClick(nextPage > totalPages ? totalPages : nextPage);
  };

  return (
    <S.WrapperStyles aria-label="pagination">
      <S.ContainerStyles>
        {showArrows && (
          <S.ArrowButtonStyles
            type="button"
            onClick={handlePrev}
            disabled={isFirstPage}
            aria-label="previous page"
          >
            {'<'}
          </S.ArrowButtonStyles>
        )}

        {/* 페이지 번호 */}
        {pages.map((page) => (
          <S.PageButtonStyles
            key={page}
            type="button"
            onClick={() => onPageClick(page)}
            $active={page === currentPage}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </S.PageButtonStyles>
        ))}

        {/* 마지막 페이지에서는 > 버튼 숨김*/}
        {showArrows && !isLastPage && (
          <S.ArrowButtonStyles
            type="button"
            onClick={handleNext}
            aria-label="next page"
          >
            {'>'}
          </S.ArrowButtonStyles>
        )}
      </S.ContainerStyles>
    </S.WrapperStyles>
  );
}
