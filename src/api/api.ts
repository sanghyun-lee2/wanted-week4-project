import axios from "axios";
import { CommentGetReqInfo } from "../types";

export const base = axios.create({
   baseURL: `${process.env.REACT_APP_BASE_URL}`,
   headers: {
      // cache: "no-store",
   },
});

export const commentAPI = {
   getAllComments: () => base.get(`/comments`),
   getComments: (req: CommentGetReqInfo) =>
      base.get(
         `/comments?_page=${req.pageNum}&_limit=${req.limitNum}&_order=${req.orderStr}&_sort=${req.sortStr}`
      ),
};
