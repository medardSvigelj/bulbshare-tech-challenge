import React from "react";
import { FeedSkeletonProps } from "./interfaces";
import { FeedItemSkeleton } from "./FeedItem/FeedItemSkeleton";

export const FeedSkeleton = ({ pageSize }: FeedSkeletonProps) => {
  const items: React.ReactElement[] = [];
  for (let index = 0; index < pageSize; index++) {
    items.push(<FeedItemSkeleton key={index} />);
  }
  return <>{items}</>;
};
