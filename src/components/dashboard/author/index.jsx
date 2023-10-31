import React from "react";
import "./css/author.css";
import { data } from "./data";
import {
  CardHead,
  CardImage,
  CardMain,
  CardName,
  CardPost,
  CardTitle,
} from "./css/author";

const Author = () => {
  return (
    <CardMain>
      <CardHead>Authors</CardHead>
      {data.map((value, index) => (
        <CardTitle key={index}>
          <CardImage className="mem">
            <img src={value.img} alt="profile" />
          </CardImage>
          <div style={{ paddingTop: "10px" }}>
            <CardName>{value.name}</CardName>
            <CardPost>{value.post}</CardPost>
          </div>
        </CardTitle>
      ))}
    </CardMain>
  );
};

export default Author;
