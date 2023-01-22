import * as React from "react";

import { Box, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Navbar from "../components/NavBar";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1fe47a",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#1fe47a",
          },
        },
      },
    },
  },
});

function Messages() {
  return (
    <>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, m: 2 }}>
          <Grid container spacing={2}>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Messages; 
