import ClockIcon from '@/assets/icons/clock_icon.svg?react';
import ClockIconGray from '@/assets/icons/clock_icon_gray.svg?react';
import PathIcon from '@/assets/icons/path_icon.svg?react';
import PathIconGray from '@/assets/icons/path_icon_gray.svg?react';

interface Props {
  isClosed: boolean;
  type: 'duration' | 'address';
}

export function getIconByType({ isClosed, type }: Props) {
  if (!isClosed && type === 'duration') {
    return ClockIcon;
  }

  if (isClosed && type === 'duration') {
    return ClockIconGray;
  }

  if (!isClosed && type === 'address') {
    return PathIcon;
  }

  if (isClosed && type === 'address') {
    return PathIconGray;
  }

  return undefined;
}
