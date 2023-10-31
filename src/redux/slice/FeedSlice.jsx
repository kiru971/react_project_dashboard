import { createSlice } from "@reduxjs/toolkit";

const item = JSON.parse(sessionStorage.getItem("user"));

const initialState = {
  FeedList: [],
  value: [],
  comments: [],
  commentCount: [],
  likes: [],
};

const FeedSlice = createSlice({
  name: "FeedSlice",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const id = Date.now();
      let task = { ...action.payload, id };
      state.FeedList.push(task);
      let count = 0;
      const isMatched = state.value?.find(
        (val) => val.name === action.payload.name
      );
      if (isMatched) {
        state.value = state.value.map((item) => {
          return item.name === task.name
            ? { ...item, count: item.count + 1 }
            : item;
        });
      } else {
        count = count + 1;
        let task = { ...action.payload, id, count };
        state.value.push(task);
      }
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
      let count = 0;
      const isMatched = state.commentCount?.find(
        (val) => val.id === action.payload.id
      );
      if (isMatched) {
        state.commentCount = state.commentCount.map((item) => {
          return item.id === action.payload.id
            ? { ...item, count: item.count + 1 }
            : item;
        });
      } else {
        let task = { ...action.payload, count: count + 1 };
        state.commentCount.push(task);
      }
    },
    addLike: (state, action) => {
      let count = 0;
      const isMatched = state.likes?.find(
        (val) => val.id === action.payload.id
      );
      if (isMatched) {
        state.likes = state.likes.filter((item) => {
          return item.id !== action.payload.id;
        });
      } else {
        let task = { ...action.payload, count: count + 1 };
        state.likes.push(task);
      }
    },
  },
});

export default FeedSlice.reducer;
export const { addPost, addComment, addLike } = FeedSlice.actions;
