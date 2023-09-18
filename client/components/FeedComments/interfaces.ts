import { Brand, FeedComment } from "../../hooks/interfaces";

export interface FeedCommentsWrapperProps {
  briefRef: string;
  brand: Brand;
}

export interface FeedCommentsProps {
  comments: FeedComment[];
}

export interface CommentProps {
  comment: FeedComment;
}
