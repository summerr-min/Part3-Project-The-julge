export const STATUS = {
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  CANCELED: 'canceled',
} as const;

export const STATUS_TEXT: { [key: string]: string } = {
  pending: '대기중',
  accepted: '승인 완료',
  rejected: '거절',
  canceled: '취소',
};
