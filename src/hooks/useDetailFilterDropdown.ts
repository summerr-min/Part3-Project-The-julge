import { useState } from 'react';

function useDetailFilterDropdown(initialValue = false) {
  const [isOpenDetailFilterDropdown, setIsOpenDetailFilterDropdown] =
    useState(initialValue);

  const toggleDetailFilterDropdown = () => {
    setIsOpenDetailFilterDropdown(!isOpenDetailFilterDropdown);
  };

  const openDetailFilterDropdown = () => {
    setIsOpenDetailFilterDropdown(true);
  };

  const closeDetailFilterDropdown = () => {
    setIsOpenDetailFilterDropdown(false);
  };

  return {
    isOpenDetailFilterDropdown,
    toggleDetailFilterDropdown,
    openDetailFilterDropdown,
    closeDetailFilterDropdown,
  };
}

export default useDetailFilterDropdown;
