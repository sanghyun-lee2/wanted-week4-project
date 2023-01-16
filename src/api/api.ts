import axios from "axios";

export const base = axios.create({
   baseURL: `${process.env.REACT_APP_BASE_URL}`,
   headers: {
      // cache: "no-store",
   },
});

export const commentAPI = {
   getComments: (pageNum: number, limitNum: number, orderStr: string, sortStr: string) =>
      base.get(`/comments?_page=${pageNum}&_limit=${limitNum}&_sort=${sortStr}`),
};
