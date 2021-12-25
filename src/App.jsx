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
  const [data, setData] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  // const [visible, setVisible] = useState(5);

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://arbeitnow.com/api/job-board-api",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        // let getOnlyTenItems = response.data.data.slice(0, visible);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function searchItems(searchItem) {
    return searchItem.filter(
      (item) =>
        item.company_name.toLowerCase().indexOf(searchInput) > -1 ||
        item.location.toLowerCase().indexOf(searchInput) > -1 ||
        item.title.toLowerCase().indexOf(searchInput) > -1
    );
  }

  // useEffect(() => {
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
  // }, []);

  return (
    <>
      <CssBaseline />
      <Grid>
        <Grid item xs={12}>
          <Header />
          <Main setSearchInput={setSearchInput} />
          <JobLists data={searchItems(data)} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
