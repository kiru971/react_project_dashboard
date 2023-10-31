import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import {
  BsChatSquareTextFill,
  BsFillGridFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
import { theme } from "../../../sharedComponents/theme";
import { chatData } from "./data";
import {
  ButtonIcon,
  ChatBox,
  ChatCard,
  CommentBox,
  CommentButton,
  LikeButton,
} from "./css/chat";
import { BoxHead } from "../../dashboard/css/dashboard";
import { MemberTitle } from "../../dashboard/member/css/member";

const Chat = () => {
  return (
    <>
      {chatData.map((value, index) => (
        <ChatCard key={index}>
          <BoxHead>
            <ChatBox>
              <div className="chat">
                <img src={`${value.img}`} alt="profile" />
              </div>
              <div>
                <MemberTitle>{value.name}</MemberTitle>
                <Typography
                  sx={{ color: theme.palette.success.contrastText }}
                  component={"small"}
                  variant="body2"
                >
                  {value.info}
                </Typography>
              </div>
            </ChatBox>
            <BsFillGridFill fill={theme.palette.primary.dark} size={23} />
          </BoxHead>
          {value.postimg && (
            <div style={{ marginTop: 12 }} className="post">
              <img src={value.postimg} alt="" />
            </div>
          )}
          <Box sx={{ marginTop: 1 }}>
            <Typography component={"small"} variant="body2">
              {value.post}
            </Typography>
          </Box>
          <Box sx={{ marginTop: 2, display: "flex", gap: 3 }}>
            <CommentButton>
              <BsChatSquareTextFill size={15} /> {value.comment}
            </CommentButton>
            <LikeButton>
              <BsFillHeartFill size={15} /> {value.like}
            </LikeButton>
          </Box>
          <Divider sx={{ marginTop: 2 }} />
          <CommentBox>
            <Typography sx={{ color: theme.palette.warning.contrastText }}>
              Reply..
            </Typography>
            <div>
              <ButtonIcon>
                <ImAttachment size={20} />
              </ButtonIcon>
              <ButtonIcon>
                <IoLocationSharp size={25} />
              </ButtonIcon>
            </div>
          </CommentBox>
        </ChatCard>
      ))}
    </>
  );
};

export default Chat;
