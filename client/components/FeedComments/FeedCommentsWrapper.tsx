import { Avatar, Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useEffect } from "react";
import { FeedCommentsSkeleton } from "./FeedCommentsSkeleton";
import { useComments } from "../../hooks/useComments";
import { COMMENTS_ENDPOINT_URL } from "../constants";
import { FeedComments } from "./FeedComments";
import { FeedCommentsWrapperProps } from "./interfaces";

export const FeedCommentsWrapper = ({
  briefRef,
  brand,
}: FeedCommentsWrapperProps) => {
  const { name, logo } = brand;
  const { data, error, errorMessage, isLoading, fetch } = useComments(
    COMMENTS_ENDPOINT_URL,
    briefRef
  );
  useEffect(() => {
    fetch();
  }, []);
  return (
    <Box sx={{ minWidth: "500px", height: "100%", backgroundColor: grey[300] }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          padding: 2,
        }}
      >
        <Avatar
          alt={name}
          src={logo}
          sx={{
            width: "100px",
            height: "100px",
            img: {
              objectFit: "contain",
            },
          }}
          variant="square"
        />
        <Typography variant="h4" sx={{ marginLeft: 4 }}>
          {name}
        </Typography>
      </Box>
      {!error ? (
        <>
          <FeedComments comments={data} />
          {isLoading && <FeedCommentsSkeleton />}
        </>
      ) : (
        <Typography sx={{ margin: 4 }}>{errorMessage}</Typography>
      )}
    </Box>
  );
};
