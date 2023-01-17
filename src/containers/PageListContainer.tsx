import React from "react";
import PageList from "../components/PageList";
import { commentAction } from "../redux/commentsSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

function PageListContainer() {
   const { pageNum, activePage } = useAppSelector((state) => state.commentSlice);
   const dispatch = useAppDispatch();

   const setActivePage = (idx: number) => {
      dispatch(commentAction.setActivePageNum(idx));
   };

   return <PageList pageNum={pageNum} activePage={activePage} setActivePage={setActivePage} />;
}

export default PageListContainer;
