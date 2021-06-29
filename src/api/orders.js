import http from '@/lib/axios';

export const apiOrders = (data) => http.get('orders', { params: data });
export const apiDeleteOrder = (orderId) => http.post(`orders/${orderId}`, { is_archived: true });
