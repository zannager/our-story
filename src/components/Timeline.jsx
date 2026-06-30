import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import { Typography, Box } from "@mui/material";

export default function StoryTimeline() {
  return (
    <Box sx={{ py: 10 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
      >
        Our Story
      </Typography>

      <Timeline position="alternate">

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Typography variant="h6">
              First Date
            </Typography>

            <Typography color="text.secondary">
              The day everything started.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>
            <Typography variant="h6">
              The Proposal
            </Typography>

            <Typography color="text.secondary">
              She said yes.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
          </TimelineSeparator>

          <TimelineContent>
            <Typography variant="h6">
              June 20, 2026
            </Typography>

            <Typography color="text.secondary">
              Our Wedding Day
            </Typography>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Box>
  );
}