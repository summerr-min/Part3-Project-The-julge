interface Props {
  currentHourlyPay: number;
  defaultHourlyPay: number;
}

const averageHourlyPay = ({ currentHourlyPay, defaultHourlyPay }: Props) =>
  Math.trunc(((currentHourlyPay - defaultHourlyPay) / defaultHourlyPay) * 10) *
  10;

export default averageHourlyPay;
