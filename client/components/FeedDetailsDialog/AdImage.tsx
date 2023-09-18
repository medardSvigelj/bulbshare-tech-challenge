import React from "react";
import { AdImageProps } from "../interfaces";
import { styled } from "@mui/material";

export const AdImage = styled("img")({
  display: "block",
  width: "55%",
  maxHeight: "100%",
  objectFit: "cover",
  margin: "auto",
});
