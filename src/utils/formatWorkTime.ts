interface Props {
  startsAt: string;
  workHour: number;
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function formatTime(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}

function formatWorkTime({ startsAt, workHour }: Props) {
  const startDate: Date = new Date(startsAt);
  const endDate: Date = new Date(
    startDate.getTime() + workHour * 60 * 60 * 1000
  );

  const formattedStartDate: string = formatDate(startDate);
  const formattedEndDate: string = formatTime(endDate);

  return `${formattedStartDate}~${formattedEndDate} (${workHour}시간)`;
}

export default formatWorkTime;
