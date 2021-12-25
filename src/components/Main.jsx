import React, { useState } from "react";
import axios from "axios";
import { Box, Typography, TextField, Chip, Container } from "@mui/material";

const Main = ({ setSearchInput }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#0e1926",
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Typography variant="h4" mb={2} color="#fff">
        Top European IT Job Board.
      </Typography>
      <Container>
        <TextField
          sx={{ background: "#fff", borderRadius: "4px" }}
          fullWidth
          id="standard-basic"
          label="Search..."
          variant="outlined"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Container>
      <br />
      <Chip
        sx={{ marginRight: 2, backgroundColor: "#fff", cursor: "pointer" }}
        label="Remote"
      />
      <Chip
        sx={{ marginRight: 2, backgroundColor: "#fff", cursor: "pointer" }}
        label="Job types"
      />
      <Chip
        sx={{ backgroundColor: "#fff", cursor: "pointer" }}
        label="Location"
      />
    </Box>
  );
};

export default Main;
