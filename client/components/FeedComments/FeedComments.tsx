import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { FeedComment } from "../../hooks/interfaces";
import { FeedCommentsProps } from "./interfaces";
import { FeedCommentComponent } from "./FeedCommentComponent";

export const FeedComments = ({ comments }: FeedCommentsProps) => {
  return (
    <Box>
      {comments.length > 0 &&
        comments.map((comment: FeedComment, i: number) => {
          return <FeedCommentComponent comment={comment} />;
        })}
    </Box>
  );
};
