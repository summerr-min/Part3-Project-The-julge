import { WageBadge } from '@/styles/WageBadgeStyles';

interface Props {
  averageWage: number;
  arrow: '↑' | '↓';
  isClosed: boolean;
}

function WageBadgeUI({ averageWage, arrow, isClosed }: Props) {
  return (
    <WageBadge averageWage={averageWage} isClosed={isClosed}>
      기존 시급보다 {averageWage}% {arrow}
    </WageBadge>
  );
}

export default WageBadgeUI;
