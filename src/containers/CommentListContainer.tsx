import React, { useState } from "react";
import CommentList from "../components/CommentList";
import { CommentInfo } from "../types";

// 임시 데이터 입니다. 코드 작성시 data 부분을 지워주세요
const data = [
   {
      id: 1,
      profile_url: "https://picsum.photos/id/1/50/50",
      author: "abc_1",
      content: "UI 테스트는 어떻게 진행하나요",
      createdAt: "2020-05-01",
   },
];

function CommentListContainer() {
   const [commentList, setCommentList] = useState<Array<CommentInfo>>(data);

   return (
      <div>
         <CommentList commentListInfo={commentList} />
      </div>
   );
}

export default CommentListContainer;
