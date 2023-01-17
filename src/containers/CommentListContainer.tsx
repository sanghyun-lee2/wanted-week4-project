import React, { useEffect } from "react";
import { getAllComments, getComments } from "../redux/commentsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CommentList from "../components/CommentList";

function CommentListContainer() {
   const { commentList, activePage } = useAppSelector((state) => state.commentSlice);
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getAllComments());
   }, [dispatch]);

   useEffect(() => {
      dispatch(getComments(activePage));
   }, [activePage]);

   return <CommentList commentListInfo={commentList} />;
}

export default CommentListContainer;
