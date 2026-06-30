import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
  elevation={0}
  sx={{
    background: "rgba(237, 231, 246, 0.75)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderBottom: "1px solid rgba(255,255,255,.35)",
    boxShadow: "0 4px 20px rgba(179,157,219,.15)",
  }}
>
      <Toolbar
        sx={{
          maxWidth: 1200,
          width: "100%",
          margin: "auto",
        }}
      >
        <Typography
  variant="h6"
  sx={{
    flexGrow: 1,
    fontWeight: 700,
    color: "#5E548E",
  }}
>
  Our Story
</Typography>

        <Box
  sx={{
    "& .MuiButton-root": {
      color: "#5E548E",
      fontWeight: 500,
      mx: 1,
    },
  }}
>
  <Button>Home</Button>
  <Button>Wedding</Button>
  <Button>Vows</Button>
</Box>
      </Toolbar>
    </AppBar>
  );
}