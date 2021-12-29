import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Header from "./Header";
import Main from "./Main";
import JobLists from "./JobLists";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://arbeitnow.com/api/job-board-api",
      headers: {},
    };
    axios(config)
      .then(function (response) {
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
  return (
    <div>
      <Grid item xs={12}>
        <Header setSearchInput={setSearchInput} />
        <Main setSearchInput={setSearchInput} />
        <JobLists data={searchItems(data)} />
      </Grid>
    </div>
  );
};

export default Home;
