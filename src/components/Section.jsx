import { Box, Container, Typography } from "@mui/material";

export default function Section({ title, subtitle, children }) {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
        >
          {title}
        </Typography>

        {subtitle && (
          <Typography
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            {subtitle}
          </Typography>
        )}

        {children}
      </Container>
    </Box>
  );
}