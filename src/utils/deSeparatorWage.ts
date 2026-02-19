function deSeparatorWage(formattedWage: string) {
  const numericValue = parseFloat(formattedWage.replace(/,/g, ''));

  return Number.isNaN(numericValue) ? 0 : numericValue;
}

export default deSeparatorWage;
