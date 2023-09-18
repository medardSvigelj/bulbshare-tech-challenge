import { Feed } from "../../hooks/interfaces";

export interface FeedDetailsProps {
  feed: Feed;
}

export interface FeedDetailsDialogProps {
  feed: Feed;
  onClose: () => void;
  isDialogOpen: boolean;
}

