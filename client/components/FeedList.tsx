import React from "react";
import { FeedListProps } from "./interfaces";
import { FeedItem } from "./FeedItem";
import { Box } from "@mui/material";
import { Feed } from "../hooks/interfaces";

export const FeedList = ({ feeds }: FeedListProps) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      {feeds.length > 0 &&
        feeds.map((feed: Feed, i: number) => {
          return <FeedItem feed={feed} key={i} />;
        })}
    </Box>
  );
};
