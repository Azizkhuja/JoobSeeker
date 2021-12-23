import React from "react";
import Box from "@mui/material/Box";
import { Typography, TextField, Chip, Container } from "@mui/material";

const Main = () => {
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
        />{" "}
      </Container>
      <br />
      <Chip sx={{ marginRight: 2, backgroundColor: "#fff" }} label="Remote" />
      <Chip
        sx={{ marginRight: 2, backgroundColor: "#fff" }}
        label="Job types"
      />
      <Chip sx={{ backgroundColor: "#fff" }} label="Location" />
    </Box>
  );
};

export default Main;
