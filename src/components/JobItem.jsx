import { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  Grid,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const JobItem = ({ data }) => {
  const [visible, setVisible] = useState(25);

  const loadMoreItems = () => {
    setVisible((prevValue) => prevValue + 25);
  };
  const typo = useMediaQuery("(max-width:600px)");

  return (
    <List sx={{ textAlign: "center" }}>
      {data.slice(0, visible).map((item) => {
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
                  <Grid item xs={6} sm={3} sx={{ wordWrap: "break-word" }}>
                    <ListItemText>
                      {item.company_name} <br />
                      {item.job_types}
                    </ListItemText>
                  </Grid>
                  <Grid item xs={6} sx={{ wordWrap: "break-word" }}>
                    <ListItemText>
                      {item.title} <br /> {item.tags}
                    </ListItemText>
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <ListItemText>
                      {item.location ? item.location : "Remote"}
                    </ListItemText>
                  </Grid>
                  <Grid item xs={6} sm={1}>
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
      <Button
        onClick={loadMoreItems}
        variant="contained"
        sx={{ marginTop: 2, marginRight: 1 }}
      >
        Load more
      </Button>
    </List>
  );
};

export default JobItem;
