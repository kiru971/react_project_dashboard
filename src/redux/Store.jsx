import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slice/LoginSlice";
import ProjectReducer from "./slice/ProjectSlice";
import FeedReducer from "./slice/FeedSlice";
import SuggestReducer from "./slice/SuggestSlice";
import ModeReducer from "./slice/ModeSlice";

const Store = configureStore({
  reducer: {
    user: LoginReducer,
    profile: ProjectReducer,
    feed: FeedReducer,
    suggest: SuggestReducer,
    mode: ModeReducer,
  },
});

export default Store;
