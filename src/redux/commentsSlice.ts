import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentAPI } from "../api/api";
import { CommentGetReqInfo } from "../types";

const limitNum = 4;
const orderStr = "desc";
const sortStr = "id";

export const getAllComments = createAsyncThunk(
   "comment/GET_ALL_COMMENTS",
   // payloadCreator callback: 비동기 로직의 결과를 포함하고 있는 프로미스를 반환하는 비동기 함수
   async (_void, thunkAPI) => {
      try {
         const { data } = await commentAPI.getAllComments();
         let pageNum = Math.ceil(data.length / limitNum);
         return thunkAPI.fulfillWithValue(pageNum);
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

export const getComments = createAsyncThunk(
   "comment/GET_COMMENTS",
   // payloadCreator callback: 비동기 로직의 결과를 포함하고 있는 프로미스를 반환하는 비동기 함수
   async (pageNum: number, thunkAPI) => {
      try {
         const reqInfo = {
            pageNum: pageNum,
            limitNum: limitNum,
            orderStr: orderStr,
            sortStr: sortStr,
         } as CommentGetReqInfo;
         const { data } = await commentAPI.getComments(reqInfo);
         return thunkAPI.fulfillWithValue(data);
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error);
      }
   }
);

const initialState = {
   commentList: [],
   isLoading: false,
   error: null,
   activePage: 1,
   pageNum: 0,
};

export const commentsSlice = createSlice({
   name: "comment",
   initialState: initialState,
   reducers: {
      setActivePageNum: (state, action) => {
         state.activePage = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(getAllComments.fulfilled, (state, action) => {
         state.pageNum = action.payload;
      });
      builder.addCase(getComments.fulfilled, (state, action) => {
         state.commentList = action.payload;
      });
   },
});

export const commentAction = commentsSlice.actions;
export default commentsSlice.reducer;
