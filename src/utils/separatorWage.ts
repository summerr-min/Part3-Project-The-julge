function separatorWage(wage?: number | null) {
  if (typeof wage !== 'number') {
    return '';
  }
  return wage.toLocaleString();
}

export default separatorWage;
