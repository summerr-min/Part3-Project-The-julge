import ArrowUpIcon from '@/assets/icons/icon_arrow_up_bold.svg?react';
import { WageWrap } from './WageText.styles';

interface Props {
  original: number;
  current: number;
}

function WageText({ original, current }: Props) {
  if (original === current || original === 0) return '';

  const isIncrease = current > original;
  const diff = Math.abs(current - original);

  const percentage = Math.round((diff / original) * 100);

  return (
    <WageWrap>
      {`기존 시급보다 ${percentage}%`}
      <ArrowUpIcon
        className="arrowUp-icon"
        style={{
          transform: isIncrease ? 'none' : 'rotate(180deg)',
          transition: 'transform 0.2s ease',
        }}
      />
    </WageWrap>
  );
}
export default WageText;
