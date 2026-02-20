import { useEffect, useState } from 'react';
import { Address } from '@/types/address.types';
import convertDate from '@/utils/convertDate';

type SortType = 'time' | 'pay' | 'hour' | 'shop';

interface Filter {
  offset: number;
  limit: number;
  address: Address[];
  startsAtGte: string;
  hourlyPayGte: number;
  sort: SortType;
}

interface FilterData {
  filter: Filter;
  count: number;
}

function useFilter(
  initialFilter = {
    offset: 0,
    limit: 0,
    address: [],
    startsAtGte: convertDate(new Date()),
    hourlyPayGte: 0,
    sort: 'time' as SortType,
  }
) {
  const [filterData, setFilterData] = useState<FilterData>({
    filter: initialFilter,
    count: 0,
  });

  const updateFilter = (updatedFilter: Partial<Filter>) => {
    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      filter: {
        ...prevFilterData.filter,
        ...updatedFilter,
      },
    }));
  };

  useEffect(() => {
    let count = 0;

    if (filterData.filter.hourlyPayGte !== initialFilter.hourlyPayGte) {
      count += 1;
    }

    if (
      JSON.stringify(filterData.filter.address) !==
      JSON.stringify(initialFilter.address)
    ) {
      count += 1;
    }

    setFilterData((prevFilterData) => ({
      ...prevFilterData,
      count,
    }));
  }, [filterData.filter]);

  const setOffset = (offset: number) => {
    updateFilter({ offset });
  };

  const setLimit = (limit: number) => {
    updateFilter({ limit });
  };

  const setSort = (sort: SortType) => {
    updateFilter({ sort });
  };

  const addAddress = (address: Address) => {
    updateFilter({ address: [...filterData.filter.address, address] });
  };

  const deleteAddress = (address: Address) => {
    updateFilter({
      address: filterData.filter.address.filter((item) => item !== address),
    });
  };

  const setHourlyPay = (hourlyPay: number) => {
    updateFilter({ hourlyPayGte: hourlyPay });
  };

  const setStartsAt = (startsAt: string) => {
    updateFilter({ startsAtGte: startsAt });
  };

  const resetFilter = () => {
    setFilterData({ filter: initialFilter, count: 0 });
  };

  return {
    filterData,
    setOffset,
    setLimit,
    setSort,
    addAddress,
    deleteAddress,
    setHourlyPay,
    setStartsAt,
    resetFilter,
  };
}

export default useFilter;
