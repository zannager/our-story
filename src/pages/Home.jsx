import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WeddingPreview from "../components/WeddingPreview";
import StoryTimeline from "../components/Timeline";
import WeddingSection from "../components/WeddingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WeddingPreview />
      <WeddingSection />
      <StoryTimeline />
    </>
  );
}