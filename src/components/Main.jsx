import { Box, Typography, TextField, Chip, Container } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Main = ({ setSearchInput }) => {
  const typo = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        textAlign: "center",
        backgroundColor: "#0e1926",
        paddingTop: 2,
        paddingBottom: 2,
      }}
    >
      <Typography variant={typo ? "h6" : "h4"} mb={2} color="#fff">
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
    </Box>
  );
};

export default Main;
