import { axiosInstance } from '@lib/helpers/axios';

export const fetchGallery = async () => {
  const res = await axiosInstance.get(`/galleries/?populate=*`);
  return res.data;
};