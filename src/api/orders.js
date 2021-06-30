import http from '@/lib/axios';

export const apiOrders = (data) => http.get('orders', { params: data });
export const apiOrder = (id) => http.get(`orders/${id}`);
export const apiDeleteOrder = (orderId) => http.post(`orders/${orderId}`, { is_archived: true });
