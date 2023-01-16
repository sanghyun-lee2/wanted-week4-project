import React from "react";
import styled from "styled-components";
import { CommentInfo } from "../types";

interface childProps {
   commentListInfo: Array<CommentInfo>;
}

const CommentList = ({ commentListInfo }: childProps) => {
   return (
      <>
         {commentListInfo.map((comment, key) => (
            <Comment key={key}>
               <img src={comment.profile_url} alt="" />

               {comment.author}

               <CreatedAt>{comment.createdAt}</CreatedAt>

               <Content>{comment.content}</Content>

               <BtnDiv>
                  <Button>수정</Button>
                  <Button>삭제</Button>
               </BtnDiv>

               <hr />
            </Comment>
         ))}
      </>
   );
};

const Comment = styled.div`
   padding: 7px 10px;
   text-align: left;

   & > img {
      vertical-align: middle;
      margin-right: 10px;
      border-radius: 50%;
      width: 50px;
      height: 50px;
   }
`;

const CreatedAt = styled.div`
   float: right;
   vertical-align: middle;
`;

const Content = styled.div`
   margin: 10px 0;
`;

const BtnDiv = styled.div`
   display: flex;
   align-items: right;
   flex-direction: row-reverse;
`;

const Button = styled.button`
   margin: 10px 0;
   margin-right: 10px;
   padding: 0.375rem 0.75rem;
   border-radius: 0.25rem;
   border: 1px solid lightgray;
   cursor: pointer;
`;

export default CommentList;
