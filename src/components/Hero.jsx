import { Box, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "url('/images/hero/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(35,25,55,.45), rgba(35,25,55,.45))",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          px: 2,
        }}
      >
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 6,
            fontSize: 16,
          }}
        >
          OUR STORY
        </Typography>

        <Typography
          variant="h1"
          sx={{
            mt: 2,
            fontWeight: 600,
          }}
        >
          Greg & Szan
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 2,
            opacity: .9,
          }}
        >
          June 26, 2026
        </Typography>

        <Typography
          sx={{
            mt: 4,
            maxWidth: 600,
            fontSize: 20,
          }}
        >
          Every great story begins with a single "I do."
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 6,
            px: 5,
            py: 1.5,
            borderRadius: 50,
          }}
        >
          Explore Our Story
        </Button>
      </Box>
    </Box>
  );
}