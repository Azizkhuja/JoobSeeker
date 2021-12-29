import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  Grid,
  Container,
} from "@mui/material";
import Header from "./Header";
import Main from "./Main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://arbeitnow.com/api/job-board-api",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        setJobs(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
      <Main />
      <Container>
        {jobs.map((item) => {
          return (
            <div key={item.slug}>
              <ListItem disablePadding>
                <ListItemButton>
                  <Grid
                    container
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={3}>
                      <ListItemText>
                        {item.company_name} <br />
                        {item.job_types}
                      </ListItemText>
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText>
                        {item.title} <br /> {item.tags}
                      </ListItemText>
                    </Grid>
                    <Grid item xs={2}>
                      {item.location ? item.location : "Remote"}
                    </Grid>
                    <Grid item xs={1}>
                      <ListItemText>
                        <a href={item.url} target="_blank">
                          <Button>Apply</Button>
                        </a>
                      </ListItemText>
                    </Grid>
                  </Grid>
                </ListItemButton>
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Jobs;
