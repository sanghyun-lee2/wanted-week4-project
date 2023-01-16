import React, { useEffect, useState } from "react";
import CommentList from "../components/CommentList";
import { CommentInfo } from "../types";
import { commentAPI } from "../api/api";

function CommentListContainer() {
   const [commentList, setCommentList] = useState<Array<CommentInfo>>([]);

   const getCommentList = async () => {
      try {
         const result = await commentAPI.getComments(1, 4, "desc", "sort");
         setCommentList(result.data);
      } catch (e) {
         console.log(e);
      }
   };

   const delComment = async (id: string) => {
      try {
         const result = await commentAPI.getComments(1, 4, "desc", "sort");
         setCommentList(result.data);
      } catch (e) {
         console.log(e);
      }
   };

   useEffect(() => {
      getCommentList();
   }, []);

   return (
      <div>
         <CommentList commentListInfo={commentList} />
      </div>
   );
}

export default CommentListContainer;
