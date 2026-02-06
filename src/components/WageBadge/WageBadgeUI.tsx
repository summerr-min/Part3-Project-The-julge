import { WageBadge } from '@/styles/WageBadgeStyles';

interface Props {
  averageWage: number;
  arrow?: '↑' | '↓';
  isClosed: boolean;
}

function WageBadgeUI({ averageWage, arrow, isClosed }: Props) {
  if (averageWage === 0) {
    return <WageBadge averageWage={0} isClosed={isClosed} />;
  }

  return (
    <WageBadge averageWage={averageWage} isClosed={isClosed}>
      기존 시급보다 {Math.abs(averageWage)}% {arrow}
    </WageBadge>
  );
}

export default WageBadgeUI;
