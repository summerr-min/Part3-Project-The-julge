function deSeparatorHourlyPay(formattedHourlyPay: string) {
  const numericValue = parseFloat(formattedHourlyPay.replace(/,/g, ''));

  return Number.isNaN(numericValue) ? 0 : numericValue;
}

export default deSeparatorHourlyPay;
