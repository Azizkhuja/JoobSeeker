import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid, Box } from "@mui/material";
import Header from "./components/Header";
import Main from "./components/Main";
import JobLists from "./components/JobLists";

function App() {
  // const [data, setData] = useState([]);
  // const [visible, setVisible] = useState(5);

  useEffect(() => {
    // var config = {
    //   method: "get",
    //   url: "https://arbeitnow.com/api/job-board-api",
    //   headers: {},
    // };
    // axios(config)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  return (
    <>
      <CssBaseline />
      <Grid>
        <Grid item xs={12}>
          <Header />
          <Main />
          <JobLists />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
