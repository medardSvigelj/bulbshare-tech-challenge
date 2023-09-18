import { Feed } from "../../hooks/interfaces";

export interface FeedItemProps {
  feed: Feed;
  onClick: () => void;
}

export interface FeedItemWrapperProps {
  feed: Feed;
}
