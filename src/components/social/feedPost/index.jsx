import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { BsChatSquareTextFill, BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../../sharedComponents/theme";
import { useState } from "react";
import { addComment, addLike } from "../../../redux/slice/FeedSlice";
import moment from "moment";
import {
  ButtonLike,
  FeedPostCard,
  PostCard,
  PostName,
  TextWrite,
} from "./css/feedPost";
import { ProjectPost } from "../../profile/pageproject/css/project";

const FeedPost = () => {
  const feed = useSelector((state) => state.feed.FeedList);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.feed.comments);
  const commentCount = useSelector((state) => state.feed.commentCount);
  const like = useSelector((state) => state.feed.likes);
  const [comment, setComment] = useState();
  const [show, setShow] = useState();
  const detail = JSON.parse(sessionStorage.getItem("user"));
  const name = detail[0].firstName + " " + detail[0].lastName;
  const [selected, setSelected] = useState();
  const createdAt = moment().calendar();

  const handleSubmit = (val) => {
    dispatch(
      addComment({ name, comment, img: detail[0].img, id: val.id, createdAt })
    );
    setComment("");
  };

  const handleShow = (id) => {
    setShow(id);
    setSelected(!selected);
  };

  const handleLike = (id) => {
    dispatch(addLike({ id, vid: detail[0].id }));
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      {feed.map((val) => (
        <FeedPostCard key={val.id}>
          <Box key={val.id}>
            <PostCard>
              <div className="feed">
                <img src={`../../${val.img}`} alt="suggest" />
              </div>
              <div>
                <PostName>{val.name}</PostName>
                <ProjectPost>{val.createdAt}</ProjectPost>
              </div>
            </PostCard>
            <Box
              sx={{
                marginTop: 5,
                lineHeight: "1.75rem",
                color: theme.palette.warning.contrastText,
              }}
            >
              {val.text}
            </Box>
            <Box sx={{ marginTop: 3 }}>
              {val.file && (
                <div className="postImg">
                  <img src={val.file} alt="postImage" />
                </div>
              )}
            </Box>
            <Divider sx={{ marginTop: 3 }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                padding: "1rem",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  color:
                    selected && show === val.id
                      ? theme.palette.primary.main
                      : theme.palette.info.dark,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 1,
                  fontWeight: "bold",
                  padding: "8px 8px",
                  backgroundColor:
                    selected && show === val.id
                      ? theme.palette.primary.light
                      : "white",

                  ":hover": {
                    backgroundColor:
                      selected && show === val.id
                        ? theme.palette.primary.light
                        : "white",
                  },
                }}
                onClick={() => handleShow(val.id)}
              >
                <BsChatSquareTextFill size={17} />{" "}
                <div>
                  {commentCount.find((value) => value.id === val.id)
                    ? commentCount?.map((txt, i) => {
                        return txt.id === val.id && txt.count;
                      })
                    : 0}
                </div>
                Comments
              </Button>

              <ButtonLike onClick={() => handleLike(val.id)}>
                <BsFillHeartFill size={17} />
                <div>
                  {like.find((value) => value.id === val.id)
                    ? like?.map((txt) => {
                        return txt.id === val.id && txt.count;
                      })
                    : 0}
                </div>{" "}
                Like
              </ButtonLike>
            </Box>
            <Divider sx={{ marginBottom: 2 }} />

            {selected
              ? show === val.id && (
                  <>
                    <div style={{ maxHeight: "150px", overflowY: "auto" }}>
                      {comments?.map((show, index) => {
                        return (
                          show.id === val.id && (
                            <Box
                              sx={{ display: "flex", gap: 2, marginBottom: 2 }}
                              key={index}
                            >
                              <div className="feedPost">
                                <img src={`../../${show.img}`} alt="suggest" />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    columnGap: 8,
                                    flexWrap: "wrap",
                                  }}
                                >
                                  <Typography
                                    style={{
                                      textTransform: "capitalize",
                                      fontWeight: 600,
                                      color: "#252F4A",
                                    }}
                                    component={"small"}
                                    variant="body2"
                                  >
                                    {show.name}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      color: theme.palette.success.contrastText,
                                    }}
                                    component={"small"}
                                    variant="small"
                                  >
                                    {show.createdAt}
                                  </Typography>
                                </div>
                                <Typography
                                  sx={{
                                    color: "#252F4A",
                                    fontWeight: "normal",
                                  }}
                                  component={"small"}
                                  variant="body2"
                                >
                                  {show.comment}
                                </Typography>
                              </div>
                            </Box>
                          )
                        );
                      })}
                    </div>
                    <Box
                      key={val.id}
                      sx={{
                        marginTop: 2,
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                      }}
                    >
                      <div className="feedPost">
                        <img src={`../../${detail[0].img}`} alt="suggest" />
                      </div>
                      <TextWrite
                        placeholder="Write your comment.."
                        value={comment || ""}
                        onChange={handleComment}
                      />

                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "none",
                        }}
                        disabled={!comment}
                        onClick={() => handleSubmit(val)}
                      >
                        Submit
                      </Button>
                    </Box>
                  </>
                )
              : ""}
          </Box>
        </FeedPostCard>
      ))}
    </>
  );
};

export default FeedPost;
