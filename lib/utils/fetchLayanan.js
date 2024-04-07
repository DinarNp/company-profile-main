import { axiosInstance } from '@lib/helpers/axios';

export const fetchLayanan = async () => {
  const res = await axiosInstance.get(`/layanans`);
  return res.data;
};