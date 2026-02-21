import { HourlyPayBadge } from '@/components/list/HourlyPayBadge/HourlyPayBadgeUI.styles';

interface Props {
  averageHourlyPay: number;
  arrow?: '↑' | '↓';
  isClosed: boolean;
}

function HourlyPayBadgeUI({ averageHourlyPay, arrow, isClosed }: Props) {
  if (averageHourlyPay === 0) {
    return null;
  }

  return (
    <HourlyPayBadge $averageHourlyPay={averageHourlyPay} $isClosed={isClosed}>
      기존 시급보다 {Math.abs(averageHourlyPay)}% {arrow}
    </HourlyPayBadge>
  );
}

export default HourlyPayBadgeUI;
