import { useEffect, useState } from 'react';
import { Address } from '@/types/address.types';
import { getNoticeList } from '@/api/notice';
import NoticeEntire from '@/components/list/NoticeEntire/NoticeEntire';
import useAsync from '@/hooks/useAsync';
import convertDate from '@/utils/convertDate';
import { NoticeData } from '@/types/notice.types';
import Pagination from '@/components/common/Pagination/Pagination';
import usePagination from '@/hooks/usePagination';
import SortDropdown from '@/components/list/SortDropdown/SortDropdown';
import { SORT } from '@/constants/sort';
import useSortDropdown from '@/hooks/useSortDropdown';
import DetailFilterDropdown from '@/components/list/DetailFilterDropdown/DetailFilterDropdown';
import useFilter from '@/hooks/useFilter';
import DetailFilterButton from '@/components/list/DetailFilterButton/DetailFilterButton';
import NoticeCustomized from '@/components/list/NoticeCustomized/NoticeCustomized';
import {
  NoticeEntireContainer,
  FilterContainer,
  FilterDropdownContainer,
} from './NoticeListPage.styles';

function NoticeListPage() {
  const currentDate = new Date();
  const [notice, setNotice] = useState<NoticeData>();
  const { execute } = useAsync(getNoticeList);
  const { currentPage, totalItems, updateCurrentPage, updateTotalItems } =
    usePagination({});
  const {
    filterData,
    setOffset,
    setLimit,
    setSort,
    addAddress,
    deleteAddress,
    setHourlyPay,
    setStartsAt,
    resetFilter,
  } = useFilter();
  const {
    toggleDropdown,
    isOpenDropdown,
    closeDropdown,
    selectedLocation,
    setSelectedLocation,
    category,
    setCategory,
  } = useSortDropdown();

  const Props = {
    params: {
      offset: (currentPage - 1) * 6,
      limit: filterData.filter.limit ? filterData.filter.limit : 6,
      address: filterData.filter.address
        ? filterData.filter.address
        : ([] as Address[]),
      startsAGte: filterData.filter.startsAtGte
        ? filterData.filter.startsAtGte
        : convertDate(currentDate),
      hourlyPayGte: filterData.filter.hourlyPayGte
        ? filterData.filter.hourlyPayGte
        : 0,
      sort: category,
    },
  };

  const fetch = async () => {
    const response: any = await execute(Props);
    updateTotalItems(response?.data?.count);
    setNotice(response.data);
  };

  useEffect(() => {
    fetch();
    setSort(category);
    setOffset((currentPage - 1) * 6);
    setLimit(6);
  }, [currentPage, category]);

  const handlePageChange = (pageNumber: number) => {
    updateCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(totalItems / 6);

  return (
    <div>
      <NoticeCustomized address={['서울시 종로구']} limit={10} />
      <NoticeEntireContainer>
        <NoticeEntire items={notice?.items}>
          <FilterContainer>
            <SortDropdown
              item={SORT}
              toggleDropdown={toggleDropdown}
              isOpenDropdown={isOpenDropdown}
              closeDropdown={closeDropdown}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              setCategory={setCategory}
            />
            <FilterDropdownContainer>
              <DetailFilterButton
                count={filterData.count}
                onClick={toggleDropdown}
              />
              {isOpenDropdown && (
                <DetailFilterDropdown
                  addressList={filterData.filter.address}
                  onAddressClick={addAddress}
                  onBadgeClick={deleteAddress}
                  hourlyPay={filterData.filter.hourlyPayGte}
                  setHourlyPay={setHourlyPay}
                  startsAt={filterData.filter.startsAtGte}
                  setStartsAt={setStartsAt}
                  resetFilter={resetFilter}
                  onClick={fetch}
                  onClose={closeDropdown}
                />
              )}
            </FilterDropdownContainer>
          </FilterContainer>
        </NoticeEntire>
        {totalPages > 0 && notice && notice.items.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageClick={handlePageChange}
          />
        )}
      </NoticeEntireContainer>
    </div>
  );
}

export default NoticeListPage;
