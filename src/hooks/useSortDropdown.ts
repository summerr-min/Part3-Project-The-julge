import { useState } from 'react';
import Category from '@/types/category.types';

interface Props {
  initialValue?: boolean;
}

function useSortDropdown({ initialValue = false }: Props = {}) {
  const [isOpenSortDropdown, setIsOpenSortDropdown] = useState(initialValue);
  const [category, setCategory] = useState<Category>('time');
  const [selectedLocation, setSelectedLocation] = useState('마감임박순');

  const toggleSortDropdown = () => {
    setIsOpenSortDropdown(!isOpenSortDropdown);
  };

  const openSortDropdown = () => {
    setIsOpenSortDropdown(true);
  };

  const closeSortDropdown = () => {
    setIsOpenSortDropdown(false);
  };

  return {
    isOpenSortDropdown,
    toggleSortDropdown,
    openSortDropdown,
    closeSortDropdown,
    category,
    setCategory,
    selectedLocation,
    setSelectedLocation,
  };
}

export default useSortDropdown;
