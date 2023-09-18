import { Feed } from "../hooks/interfaces";

export interface FeedListProps {
  feeds: Feed[];
}

export interface FeedItemProps {
  feed: Feed;
}

export interface FeedSkeletonProps {
  pageSize: number;
}
