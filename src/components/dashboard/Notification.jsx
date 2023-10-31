import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import { notification } from "./trend/data";
import { CardPost } from "./author/css/author";
import { NotifyCard } from "./css/dashboard";

const Notification = () => {
  return (
    <NotifyCard>
      <Typography style={{ fontWeight: "bold", fontSize: 20 }}>
        Notifications
      </Typography>
      {notification.map((val, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: `${val.background}`,
              padding: 2,
              borderRadius: 2,
              marginTop: 3,
            }}
          >
            <div style={{ display: "flex", gap: 25 }}>
              <FaLayerGroup color={`${val.info}`} size={20} />
              <div>
                <div style={{ fontWeight: "500" }}>{val.name}</div>
                <CardPost>Due in {val.post}</CardPost>
              </div>
            </div>
            <small
              style={{
                color: `${val.info}`,
                fontWeight: "bold",
              }}
            >
              {val.percent}
            </small>
          </Box>
        );
      })}
    </NotifyCard>
  );
};

export default Notification;
