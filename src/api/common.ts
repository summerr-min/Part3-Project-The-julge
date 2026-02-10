import instance from '@/api/axios';

export async function getMyShopId(userId: string): Promise<string | null> {
  const res = await instance.get(`/users/${userId}`);

  const data = res.data;

  const shopId =
    data?.item?.shopId ??
    data?.item?.shop?.id ??
    data?.shopId ??
    data?.shop?.id ??
    null;

  return shopId ? String(shopId) : null;
}

export async function hasUnreadAlerts(userId: string): Promise<boolean> {
  const res = await instance.get(`/users/${userId}/alerts`, {
    params: { offset: 0, limit: 1 },
  });

  const items = res.data?.items ?? res.data?.item ?? [];

  return Array.isArray(items) && items.some((a) => a.read === false);
}
