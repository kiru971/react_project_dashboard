import { Box, Divider } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFollow,
  addFollowCount,
  removeSuggest,
} from "../../../redux/slice/SuggestSlice";
import { CardSuggest, FollowButton, SuggestTitle } from "./css/suggest";
import { CellHead, MemberTitle } from "../../dashboard/member/css/member";
import { CardPost } from "../../dashboard/author/css/author";
import { BoxHead } from "../../dashboard/css/dashboard";
import { TrendBox } from "../../dashboard/trend/css/trend";

const Suggestion = () => {
  const suggest = useSelector((state) => state.suggest.follows);
  const item = JSON.parse(sessionStorage.getItem("user"));
  const dispatch = useDispatch();

  const handleFollow = (value) => {
    let task = { ...value, uid: item[0].id };
    dispatch(addFollow(task));
    dispatch(removeSuggest(value));
    dispatch(addFollowCount({ id: item[0].id }));
  };

  return (
    <CardSuggest>
      <BoxHead>
        <div>
          <MemberTitle>Suggestions for you</MemberTitle>
          <CardPost>8k social visitors</CardPost>
        </div>
      </BoxHead>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {suggest.map(
          (value, index) =>
            value.firstName !== item[0].firstName && (
              <Box key={index}>
                <TrendBox>
                  <CellHead>
                    <div className="suggest">
                      <img src={`../../${value.img}`} alt="suggest" />
                    </div>
                    <div>
                      <SuggestTitle>
                        {value.firstName}&nbsp; {value.lastName}
                      </SuggestTitle>
                      <CardPost>{value.role}</CardPost>
                    </div>
                  </CellHead>
                  <FollowButton onClick={() => handleFollow(value)}>
                    Follow
                  </FollowButton>
                </TrendBox>
                <Divider sx={{ borderStyle: "dashed" }} />
              </Box>
            )
        )}
      </Box>
    </CardSuggest>
  );
};

export default Suggestion;
