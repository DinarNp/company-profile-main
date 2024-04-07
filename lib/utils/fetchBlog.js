import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
  },
});

export const fetchBlog = async (slug) => {
  const res = await instance.get(`/blogs/${slug}?populate=*`);
  return res.data;
};
export const fetchBlogBasedCategories = async (slug, page, pageSize) => {
  const res = await instance.get(`/blog/category?slug=${slug}&page=${page}&pageSize=${pageSize}`);
  return res.data;
};

export const fetchBlogs = async () => {
  const res = await instance.get('/categories?populateBlogs=true');
  return res.data;
};
