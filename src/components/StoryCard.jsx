import {
  Card,
  CardActionArea,
  Box,
  Typography,
} from "@mui/material";

export default function StoryCard({
  title,
  description,
  cover,
  onClick,
}) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        transition: ".35s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 10,
        },
      }}
    >
      <CardActionArea onClick={onClick}>
        <Box
          sx={{
            height: 340,
            backgroundImage: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",

            "&:hover": {
              transform: "scale(1.03)",
              transition: ".5s",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,.7), rgba(0,0,0,.15))",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: 24,
              left: 24,
              right: 24,
              color: "white",
            }}
          >
            <Typography variant="h4">
              {title}
            </Typography>

            <Typography sx={{ mt: 1 }}>
              {description}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}