import { Grid, Container, Typography } from "@mui/material";
import StoryCard from "./StoryCard";

export default function WeddingSection() {

  const stories = [
  {
    id: "prewedding",
    title: "Pre-Wedding",
    description: "The moments before forever.",
    image: "/images/wedding/prewedding.jpg",
  },
  {
    id: "ceremony",
    title: "Ceremony",
    description: "Where we said 'I do.'",
    image: "/images/wedding/ceremony.jpg",
  },
  {
    id: "reception",
    title: "Reception",
    description: "Celebrating with our loved ones.",
    image: "/images/wedding/reception.jpg",
  },
  {
    id: "vows",
    title: "Our Vows",
    description: "Promises that will last forever.",
    image: "/images/wedding/vows.jpg",
  },
];

  return (
    <Container sx={{ py: 12 }}>

      <Typography
        variant="h3"
        align="center"
        gutterBottom
      >
        The Wedding
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Relive every chapter of our special day.
      </Typography>

      <Grid container spacing={4}>
  {stories.map((story) => (
    <Grid
      size={{ xs: 12, md: 6 }}
      key={story.title}
    >
      <StoryCard {...story} />
    </Grid>
  ))}
</Grid>

    </Container>
  );
}