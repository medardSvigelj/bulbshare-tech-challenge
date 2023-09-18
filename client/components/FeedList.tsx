import React from "react";
import { FeedListProps } from "./interfaces";
import { Box } from "@mui/material";
import { Feed } from "../hooks/interfaces";
import { FeedItemWrapper } from "./FeedItem/FeedItemWrapper";

export const FeedList = ({ feeds }: FeedListProps) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      {feeds.length > 0 &&
        feeds.map((feed: Feed, i: number) => {
          return <FeedItemWrapper feed={feed} key={i} />
        })}
    </Box>
  );
};
