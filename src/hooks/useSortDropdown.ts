import { useState } from 'react';

type Category = 'time' | 'pay' | 'hour' | 'shop';

interface Props {
  initialValue?: boolean;
}

function useSortDropdown({ initialValue = false }: Props = {}) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(initialValue);
  const [category, setCategory] = useState<Category>('time');
  const [selectedLocation, setSelectedLocation] = useState('마감임박순');

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const openDropdown = () => {
    setIsOpenDropdown(true);
  };

  const closeDropdown = () => {
    setIsOpenDropdown(false);
  };

  return {
    isOpenDropdown,
    toggleDropdown,
    openDropdown,
    closeDropdown,
    category,
    setCategory,
    selectedLocation,
    setSelectedLocation,
  };
}

export default useSortDropdown;
