import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { CommentProps } from "./interfaces";

export const FeedCommentComponent = ({ comment }: CommentProps) => {
  const { avatar, name } = comment.user;
  return (
    <Box
      sx={{
        margin: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Avatar
        alt={name}
        src={avatar}
        sx={{
          width: "40px",
          height: "40px",
          img: {
            objectFit: "contain",
          },
        }}
      />
      <Typography sx={{ fontWeight: "bold", marginLeft: 2, marginRight: 2 }}>
        {name}
      </Typography>
      <Typography>{comment.comment}</Typography>
    </Box>
  );
};
