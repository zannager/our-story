import { useState } from "react";
import {
  Dialog,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function GalleryDialog({
  open,
  onClose,
  photos = [],
  video,
  currentPhoto,
  setCurrentPhoto,
}) {
  const [videoOpen, setVideoOpen] = useState(false);

  const previousPhoto = () => {
    setCurrentPhoto((prev) =>
      prev === 0 ? photos.length - 1 : prev - 1
    );
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) =>
      prev === photos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Photo Gallery */}
      <Dialog
        open={open}
        onClose={onClose}
        fullScreen
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            bgcolor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Close */}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 20,
              right: 20,
              color: "white",
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Previous */}
          {photos.length > 1 && (
            <IconButton
              onClick={previousPhoto}
              sx={{
                position: "absolute",
                left: 20,
                color: "white",
                zIndex: 2,
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}

          {/* Next */}
          {photos.length > 1 && (
            <IconButton
              onClick={nextPhoto}
              sx={{
                position: "absolute",
                right: 20,
                color: "white",
                zIndex: 2,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}

          {/* Current Photo */}
          {photos.length > 0 && (
            <Box
              component="img"
              src={photos[currentPhoto]}
              sx={{
                maxWidth: "95%",
                maxHeight: "85%",
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
          )}

          {/* Counter */}
          <Typography
            sx={{
              position: "absolute",
              bottom: 70,
              color: "white",
              fontSize: 18,
            }}
          >
            {photos.length > 0
              ? `${currentPhoto + 1} / ${photos.length}`
              : "0 / 0"}
          </Typography>

          {/* Watch Film */}
          {video && (
            <Button
              variant="contained"
              onClick={() => setVideoOpen(true)}
              sx={{
                position: "absolute",
                bottom: 20,
                borderRadius: 10,
                px: 4,
                bgcolor: "#cdb4db",
                color: "#fff",

                "&:hover": {
                  bgcolor: "#b497d6",
                },
              }}
            >
              🎥 {video.title}
            </Button>
          )}
        </Box>
      </Dialog>

      {/* Video Player */}
      <Dialog
  open={videoOpen}
  onClose={() => setVideoOpen(false)}
  fullScreen
>
  <Box
    sx={{
      width: "100%",
      height: "100vh",
      bgcolor: "black",
      position: "relative",
    }}
  >
    <IconButton
      onClick={() => setVideoOpen(false)}
      sx={{
        position: "absolute",
        top: 20,
        right: 20,
        color: "white",
        zIndex: 2,
      }}
    >
      <CloseIcon />
    </IconButton>

    <iframe
      src={`https://www.youtube.com/embed/${video?.youtubeId}`}
      title={video?.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  </Box>
</Dialog>
    </>
  );
}