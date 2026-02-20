import dayjs from 'dayjs';

/**
 * 시작 시간과 업무 시간을 받아
 * "YYYY-MM-DD HH:mm ~ HH:mm (n시간)" 형식으로 바꾸기
 * @param startsAt - 시작 시간 문자열
 * @param workhour - 업무 시간 숫자
 */
export const formatWorkDate = (startsAt: string, workhour: number) => {
  const start = dayjs(startsAt);
  const end = start.add(workhour, 'hour');

  const datePart = start.format('YYYY-MM-DD HH:mm');
  const endTimePart = end.format('HH:mm');

  return `${datePart} ~ ${endTimePart} (${workhour}시간)`;
};

/**
 * 알림창 전용 날짜 포맷
 * @param startsAt - 시작 시간 문자열
 * @param workhour - 업무 시간 숫자
 * @return (2023-01-14 15:00~18:00) 형태임
 */

export const formatNotiDate = (startsAt: string, workhour: number) => {
  if (!startsAt) return '';

  const start = dayjs(startsAt);
  const end = start.add(workhour, 'hour');

  const datePart = start.format('YYYY-MM-DD HH:mm');
  const endTimePart = end.format('HH:mm');

  return `${datePart}~${endTimePart})`;
};
