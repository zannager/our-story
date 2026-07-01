import { useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import StoryCard from "./StoryCard";
import GalleryDialog from "./dialogs/GalleryDialog";


export default function WeddingSection() {
    const [selectedStory, setSelectedStory] = useState(null);
    const [currentPhoto, setCurrentPhoto] = useState(0);

 const stories = [
  {
    id: "pre-wedding",
    title: "Pre-Wedding",
    description: "Photos and memories before the big day.",

    cover: "/images/wedding/prewedding.jpg",

    photos: [
       "/images/wedding/prewedding.jpg",
       "/images/wedding/prewedding1.jpg",
        "/images/wedding/prewedding2.jpg",
        "/images/wedding/prewedding3.jpg",
    ],

    video: {
      title: "Our Pre-Wedding Film",
      src: "/videos/prenup.mp4",
      thumbnail: "/images/wedding/prewedding.jpg",
    },
  }, 

  {
    id: "ceremony",
    title: "Ceremony",
    description: "Where we exchanged our vows and became one.",
    cover: "/images/wedding/ceremony.jpg",
    photos: [
      "/images/wedding/ceremony.jpg",
    ],
    video: null,
  },

  {
    id: "reception",
    title: "Reception",
    description: "A celebration with our family and friends.",
    cover: "/images/wedding/reception.jpg",
    photos: [
      "/images/wedding/reception.jpg",
    ],
    video: null,
  },

  {
    id: "sde",
    title: "Same Day Edit",
    description: "A cinematic recap shown during our reception.",
    cover: "/images/wedding/sde.jpg",
    photos: [],
    video: {
      title: "Same Day Edit",
      src: "/videos/wedding/sde.mp4",
      thumbnail: "/images/wedding/sde.jpg",
    },
  },

  {
    id: "full-film",
    title: "Full Wedding Film",
    description: "Relive our wedding from beginning to end.",
    cover: "/images/wedding/fullfilm.jpg",
    photos: [],
    video: {
      title: "Full Wedding Film",
      src: "/videos/wedding/fullfilm.mp4",
      thumbnail: "/images/wedding/fullfilm.jpg",
    },
  },

  {
    id: "vows",
    title: "Our Vows",
    description: "The promises we made to each other.",
    cover: "/images/wedding/vows.jpg",
    photos: [
      "/images/wedding/vows.jpg",
    ],
    video: null,
  },
];

  return (
    <Container sx={{ py: 12 }}>

      <Typography
        variant="h3"
        align="center"
        gutterBottom
      >
        Our Wedding Memories
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        sx={{ mb: 6 }}
      >
        Relive every smile, every tear, and every unforgettable moment.
      </Typography>

      <Grid container spacing={4}>
  {stories.map((story) => (
    <Grid
      size={{ xs: 12, md: 6 }}
      key={story.id}
    >
      <StoryCard
  {...story}
  onClick={() => {
  setCurrentPhoto(0);
  setSelectedStory(story);
}}
/>
    </Grid>
  ))}
</Grid>

<GalleryDialog
  open={selectedStory !== null}
  photos={selectedStory?.photos}
  video={selectedStory?.video}
  currentPhoto={currentPhoto}
  setCurrentPhoto={setCurrentPhoto}
  onClose={() => setSelectedStory(null)}
/>

    </Container>
  );
}