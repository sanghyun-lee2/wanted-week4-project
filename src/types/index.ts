export type CommentGetReqInfo = {
   pageNum: number;
   limitNum: number;
   orderStr: string;
   sortStr: string;
};

export type CommentInfo = {
   id: number;
   profile_url: string;
   author: string;
   content: string;
   createdAt: string;
};
