import React, { useState } from "react";
import { Dialog, Box } from "@mui/material";
import { FeedDetails } from "./FeedDetails";
import { InterfaceButton } from "./InterfaceButton";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { scrollIntoView } from "../helpers";
import { DialogScreen } from "./DialogScreen";
import { FeedDetailsDialogProps } from "./interfaces";
import { FeedCommentsWrapper } from "../FeedComments/FeedCommentsWrapper";

export const FeedDetailsDialog = ({
  onClose,
  isDialogOpen,
  feed,
}: FeedDetailsDialogProps) => {
  const { banner_image, banner_text, brand } = feed;
  const [firstScreenRef, setFirstScreenRef] = useState(null);
  const [secondScreenRef, setSecondScreenRef] = useState(null);
  const entry = useIntersectionObserver(firstScreenRef);
  const isFirstScreenVisible = !!entry?.isIntersecting;
  return (
    <Dialog open={isDialogOpen} fullScreen>
      <InterfaceButton
        src="/close-dialog.svg"
        alt="close-button"
        onClick={onClose}
        sx={{ position: "absolute", margin: "20px" }}
      />
      <Box
        sx={{
          position: "absolute",
          left: "calc(100vw - 550px)",
          top: "45vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!isFirstScreenVisible && (
          <InterfaceButton
            src="/switch-down.svg"
            alt="switch-down"
            onClick={() => scrollIntoView(firstScreenRef)}
            sx={{ transform: "rotate(180deg)" }}
          />
        )}
        {isFirstScreenVisible && (
          <InterfaceButton
            src="/switch-down.svg"
            alt="switch-up"
            onClick={() => scrollIntoView(secondScreenRef)}
            sx={{ marginTop: 4 }}
          />
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            scrollBehavior: "smooth",
            overflow: "auto",
            scrollSnapType: "y mandatory",
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <DialogScreen sx={{ backgroundColor: "black" }}>
            <img
              ref={setFirstScreenRef}
              src={banner_image}
              alt={banner_text}
              loading="lazy"
              style={{
                display: "block",
                width: "55%",
                maxHeight: "100%",
                objectFit: "cover",
                margin: "auto",
              }}
            />
          </DialogScreen>
          <DialogScreen ref={setSecondScreenRef}>
            <FeedDetails feed={feed} />
          </DialogScreen>
        </Box>
        <FeedCommentsWrapper briefRef={feed.briefref} brand={brand} />
      </Box>
    </Dialog>
  );
};
