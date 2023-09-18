import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Box,
  CardActionArea,
  Button,
} from "@mui/material";
import React from "react";
import { FeedItemProps } from "./interfaces";

export const FeedItem = ({ feed }: FeedItemProps) => {
  const { brand, banner_image, feed_title } = feed;

  return (
    <Card sx={{ maxWidth: 345, m: 2, position: "relative" }}>
      <CardHeader
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        avatar={
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={brand.name}
              src={brand.logo}
              sx={{
                img: {
                  objectFit: "contain",
                },
              }}
              variant="square"
            />
            <Typography fontWeight="fontWeightMedium" sx={{ marginLeft: 2 }}>
              {brand.name}
            </Typography>
          </Box>
        }
        action={
          <Button variant="text" sx={{ marginTop: 1 }}>
            Join Brief Now
          </Button>
        }
      />
      <CardActionArea
        sx={{
          position: "relative",
          backgroundImage: `url(${banner_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
      >
        <CardContent
          sx={{
            position: "relative",
            backgroundColor: "rgba(0,0,0,.24)",
            minHeight: "300px",
            display: "flex",
            alignItems: "end",
          }}
        >
          <Typography variant="h5" sx={{ color: "white", textAlign: "left" }}>
            {feed_title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
