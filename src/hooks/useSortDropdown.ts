import { useState } from 'react';

type Category = 'time' | 'pay' | 'hour' | 'shop';

function useSortDropdown(initialValue = false) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(initialValue);
  const [category, setCategory] = useState<Category>('time');

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
  };
}

export default useSortDropdown;
