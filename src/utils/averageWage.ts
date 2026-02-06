interface Props {
  currentWage: number;
  defaultWage: number;
}

const averageWage = ({ currentWage, defaultWage }: Props) =>
  Math.trunc(((currentWage - defaultWage) / defaultWage) * 10) * 10;

export default averageWage;
