import dayjs from 'dayjs';

/**
 * 시작 시간과 업무 시간을 받아 "YYYY-MM-DD HH:mm ~ HH:mm (n시간)" 형식으로 바꾸기
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
