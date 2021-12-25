import { Container } from "@mui/material";
import JobItem from "./JobItem";

const JobLists = ({ data }) => {
  return (
    <Container>
      <JobItem data={data} />
    </Container>
  );
};

export default JobLists;
