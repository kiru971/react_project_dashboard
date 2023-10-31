import { Box, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCheck2 } from "react-icons/bs";
import {
  addSuggest,
  removeFollow,
  removeFollowCount,
} from "../../../redux/slice/SuggestSlice";
import { MemberTitle } from "../../dashboard/member/css/member";
import {
  FollowRole,
  FollowTitle,
  FollowersCard,
  FollowingButton,
} from "./css/follow";

const Follower = () => {
  const followers = useSelector((state) => state.suggest.followers);
  const dispatch = useDispatch();
  const item = JSON.parse(sessionStorage.getItem("user"));

  const handleRemove = (value) => {
    dispatch(removeFollow(value));
    dispatch(addSuggest(value));
    const id = item[0].id;
    dispatch(removeFollowCount({ id }));
  };

  return (
    <>
      <Box>
        <MemberTitle>My Connections</MemberTitle>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
        {followers.map((index) => {
          return (
            index.uid === item[0].id && (
              <Grid item sm={6} xs={12} key={index.id}>
                <FollowersCard key={index.id}>
                  <div className="follow">
                    <img src={`../../${index.img}`} alt="follower" />
                  </div>
                  <div>
                    <FollowTitle>
                      {index.firstName}&nbsp;{index.lastName}
                    </FollowTitle>
                    <FollowRole variant="caption" component={"div"}>
                      {index.role}
                    </FollowRole>
                  </div>
                  <FollowingButton onClick={() => handleRemove(index)}>
                    <BsCheck2 style={{ marginRight: 5 }} /> Following
                  </FollowingButton>
                </FollowersCard>
              </Grid>
            )
          );
        })}
      </Grid>
    </>
  );
};

export default Follower;
