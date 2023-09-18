import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { AdImage } from "./AdImage";
import { FeedDetailsProps } from "./interfaces";

export const FeedDetails = ({ feed }: FeedDetailsProps) => {
  const { feed_title, banner_text, brand, starts_on, ad_1_image, ad_2_image } =
    feed;
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Avatar
        alt={brand.name}
        src={brand.logo}
        sx={{
          width: "100px",
          height: "100px",
          img: {
            objectFit: "contain",
          },
        }}
        variant="square"
      />
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        {feed_title}
      </Typography>
      <Typography>{new Date(starts_on).toDateString()}</Typography>
      <Typography>{banner_text}</Typography>
      <AdImage src={ad_1_image} alt="ad-image-1" loading="lazy" />;
      <AdImage src={ad_2_image} alt="ad-image-2" loading="lazy" />;
    </Box>
  );
};
