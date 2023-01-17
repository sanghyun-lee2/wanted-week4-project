import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./commentsSlice";
import logger from "redux-logger";

const store = configureStore({
   reducer: {
      commentSlice: commentSlice,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

// useSelector 사용시 타입으로 사용하기 위함
export type RootState = ReturnType<typeof store.getState>;
// useDispatch를 좀 더 명확하게 사용하기 위함
export type AppDispatch = typeof store.dispatch;
