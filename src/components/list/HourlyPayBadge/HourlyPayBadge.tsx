import averageHourlyPay from '@/utils/averageHourlyPay';
import HourlyPayBadgeUI from './HourlyPayBadgeUI';

interface Props {
  defaultHourlyPay: number;
  currentHourlyPay: number;
  isClosed: boolean;
}

function HourlyPayBadge({
  defaultHourlyPay,
  currentHourlyPay,
  isClosed,
}: Props) {
  const isSameHourlyPay = defaultHourlyPay === currentHourlyPay;

  if (isSameHourlyPay) {
    return null;
  }

  const determineArrowDirection = () => {
    if (defaultHourlyPay < currentHourlyPay) {
      return '↑';
    }
    return '↓';
  };

  return (
    <HourlyPayBadgeUI
      averageHourlyPay={averageHourlyPay({
        defaultHourlyPay,
        currentHourlyPay,
      })}
      arrow={determineArrowDirection()}
      isClosed={isClosed}
    />
  );
}

export default HourlyPayBadge;
