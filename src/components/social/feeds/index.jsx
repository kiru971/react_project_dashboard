import React, { useRef, useState } from "react";
import { theme } from "../../../sharedComponents/theme";
import FeedPost from "../feedPost";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/slice/FeedSlice";
import moment from "moment";
import { BiImageAdd } from "react-icons/bi";
import { BoxPost, FeedCard, FeedName, PostButton, TextBox } from "./css/feed";
import { ChatBox } from "../../profile/chat/css/chat";

const Feed = () => {
  const item = JSON.parse(sessionStorage.getItem("user"));
  const [text, setMessage] = useState();
  const img = item[0].img;
  const name = item[0].firstName + " " + item[0].lastName;
  const createdAt = moment().format("MMM Do YYYY, h:mm a");
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [file, setFile] = useState();

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    dispatch(addPost({ text, img, name, createdAt, file }));
    setMessage("");
    setFile("");
  };

  const handleImage = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <FeedCard>
        <ChatBox>
          <div className="feed">
            <img src={`${item[0].img}`} alt="suggest" />
          </div>
          <FeedName>What's on your mind, {item[0].firstName}?</FeedName>
        </ChatBox>
        <div style={{ marginTop: 10 }}>
          <TextBox
            name="text"
            id="feed"
            value={text}
            onChange={handleMessage}
          />
          {file && (
            <div className="postImg">
              <img src={file} alt="postImage" />
            </div>
          )}
        </div>
        <BoxPost>
          <input
            type="file"
            name="file"
            id="file"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <BiImageAdd
            onClick={handleImage}
            size={28}
            style={{ marginRight: 10 }}
            color={theme.palette.primary.main}
          />
          <PostButton
            variant="contained"
            disabled={!text}
            onClick={handleClick}
          >
            Post
          </PostButton>
        </BoxPost>
      </FeedCard>
      <FeedPost />
    </>
  );
};

export default Feed;
