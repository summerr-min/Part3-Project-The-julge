import averageWage from '@/utils/averageWage';
import WageBadgeUI from './WageBadgeUI';

interface Props {
  defaultWage: number;
  currentWage: number;
  isClosed: boolean;
}

function WageBadge({ defaultWage, currentWage, isClosed }: Props) {
  const determineArrowDirection = () => {
    if (defaultWage <= currentWage) {
      return '↑';
    }
    return '↓';
  };

  return (
    <WageBadgeUI
      averageWage={averageWage({ defaultWage, currentWage })}
      arrow={determineArrowDirection()}
      isClosed={isClosed}
    />
  );
}

export default WageBadge;
