function separatorHourlyPay(hourlyPay?: number | null) {
  if (typeof hourlyPay !== 'number') {
    return '';
  }
  return hourlyPay.toLocaleString();
}

export default separatorHourlyPay;
