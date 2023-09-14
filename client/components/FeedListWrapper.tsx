import React, { useEffect } from "react";
import { useFeed } from "../hooks/useFeed";
import { FEED_ENDPOINT_URL } from "./constants";
import { FeedSkeleton } from "./FeedSkeleton";
import { FeedList } from "./FeedList";
import { Typography } from "@mui/material";
import { useScroll } from "../hooks/useScroll";

export const FeedListWrapper = () => {
  const pageSize = 5;
  const { data, error, errorMessage, isLoading, fetch } = useFeed(
    FEED_ENDPOINT_URL,
    pageSize
  );
  const { isScrollOnBottom } = useScroll();
  useEffect(() => {
    fetch();
  }, []);
  useEffect(() => {
    if (isScrollOnBottom) {
      fetch();
    }
  }, [isScrollOnBottom]);

  if (!error) {
    return (
      <>
        <FeedList feeds={data} />
        {isLoading && <FeedSkeleton pageSize={pageSize} />}
      </>
    );
  } else {
    return <Typography>{errorMessage}</Typography>;
  }
};
