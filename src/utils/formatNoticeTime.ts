const formatNoticeTime = (startsAt: string, workhour: number): string => {
  const startDate = new Date(startsAt);

  const endDate = new Date(startDate);
  endDate.setHours(startDate.getHours() + workhour);

  const format = (n: number) => n.toString().padStart(2, '0');

  const y = startDate.getFullYear();
  const m = format(startDate.getMonth() + 1);
  const d = format(startDate.getDate());

  const startH = format(startDate.getHours());
  const startM = format(startDate.getMinutes());

  const endH = format(endDate.getHours());
  const endM = format(endDate.getMinutes());

  const isNextDay = startDate.getDate() !== endDate.getDate();
  const nextDayLabel = isNextDay ? ' (익일)' : '';

  return `${y}-${m}-${d} ${startH}:${startM}~${endH}:${endM}${nextDayLabel} (${workhour}시간)`;
};

export default formatNoticeTime;
