import { createSlice } from "@reduxjs/toolkit";
import { follow } from "../../components/social/suggestion/data";

const item = JSON.parse(localStorage.getItem("user"));

const initialState = {
  follows: follow,
  followers: [],
  followCount: [],
  following: [],
};

const SuggestSlice = createSlice({
  name: "SuggestSlice",
  initialState,
  reducers: {
    addSuggest: (state, action) => {
      state.follows.push(action.payload);
    },
    removeSuggest: (state, action) => {
      state.follows = state.follows.filter((val) => {
        return action.payload.id !== val.id;
      });
    },
    resetSuggest: (state) => {
      let task = follow.filter((val) =>
        state.follows.every((index) => index.id !== val.id)
      );
      state.follows = state.follows.concat(task);
    },
    updateSuggest: (state, action) => {
      let followers = state.followers.filter(
        (val) => val.uid == action.payload.id
      );
      let task = state.follows.filter((val) =>
        followers.every((index) => index.id !== val.id)
      );
      state.follows = task;
    },
    addFollow: (state, action) => {
      state.followers.push(action.payload);
    },
    removeFollow: (state, action) => {
      state.followers = state.followers.filter((val) => {
        return action.payload.id !== val.id;
      });
    },
    resetFollow: (state) => {
      state.followers = [];
    },
    addFollowCount: (state, action) => {
      let count = 0;
      const isMatched = state.followCount?.find(
        (val) => val.id === action.payload.id
      );
      if (isMatched) {
        state.followCount = state.followCount.map((index) => {
          return index.id === action.payload.id
            ? { ...index, count: index.count + 1 }
            : index;
        });
      } else {
        count = count + 1;
        let task = { ...action.payload, count };
        state.followCount.push(task);
      }
    },
    removeFollowCount: (state, action) => {
      state.followCount = state.followCount.map((index) => {
        return index.id === action.payload.id
          ? { ...index, count: index.count - 1 }
          : index;
      });
    },
    addFollowing: (state, action) => {
      let count = 0;
      let task = state.followers.find(
        (val) => val.firstName === action.payload.name
      );
      const isMatched = state.following?.find(
        (val) => val.id === action.payload.name
      );
      if (isMatched) {
        state.following = state.following.map((index) => {
          return index.id === action.payload.name
            ? { ...index, count: task ? count + 1 : 0 }
            : index;
        });
      } else {
        count = task ? count + 1 : 0;
        let data = { id: action.payload.name, count };
        state.following.push(data);
      }
    },
  },
});

export default SuggestSlice.reducer;
export const {
  addSuggest,
  addFollow,
  addFollowCount,
  removeSuggest,
  removeFollow,
  removeFollowCount,
  resetSuggest,
  resetFollow,
  updateSuggest,
  addFollowing,
} = SuggestSlice.actions;
