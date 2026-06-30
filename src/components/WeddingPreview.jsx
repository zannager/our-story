import { Card, CardContent, Grid, Typography } from "@mui/material";
import Section from "./Section";

export default function WeddingPreview() {
  const items = [
    "📸 Pre-Wedding",
    "💒 Ceremony",
    "🎉 Reception",
    "🎥 Same Day Edit",
  ];

  return (
    <Section
      title="The Wedding"
      subtitle="A collection of moments from our special day."
    >
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} md={6} key={item}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6">
                  {item}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}