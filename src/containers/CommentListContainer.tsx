import React, { useEffect } from "react";
import { getAllComments, getComments, commentAction } from "../redux/commentsSlice";
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

   const setActivePage = (idx: number) => {
      dispatch(commentAction.setActivePageNum(idx));
   };

   return <CommentList commentListInfo={commentList} setActivePage={setActivePage} />;
}

export default CommentListContainer;
