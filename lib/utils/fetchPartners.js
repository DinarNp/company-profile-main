import { axiosInstance } from '@lib/helpers/axios';

export const fetchPartners = async () => {
  const res = await axiosInstance.get(`/partners?populate=*`);
  return res.data;
};
