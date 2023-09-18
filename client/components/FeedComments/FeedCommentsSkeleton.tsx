import { Box, Skeleton } from "@mui/material";
import React from "react";

export const FeedCommentsSkeleton = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", margin: 2 }}>
      <Box sx={{ marginRight: 2 }}>
        <Skeleton animation="wave" variant="circular" width={40} height={40} />
      </Box>
      <Box sx={{ width: "100%" }}>
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
      </Box>
    </Box>
  );
};
