import { FeedDetailsDialog } from "../FeedDetailsDialog/FeedDetailsDialog";
import { FeedItem } from "./FeedItem";
import React, { useState } from "react";
import { FeedItemWrapperProps } from "./interfaces";

export const FeedItemWrapper = ({ feed }: FeedItemWrapperProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <FeedItem feed={feed} onClick={() => setIsDialogOpen(true)} />
      <FeedDetailsDialog
        feed={feed}
        isDialogOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};
