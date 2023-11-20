import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import { Container, Grid, Typography } from "@mui/material";

const Home = () => {
  const [innitData, setInnitData] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/codingresources/codingResources")
      .then((res) => res.json())
      .then((data) => setInnitData(data))
      .catch((err) => console.log(err));
  }, []);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setData(innitData.slice(0, page * 8));
  }, [page, innitData]);

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
      document.documentElement.offsetHeight
    ) {
      setPage(page + 1);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={2} columnSpacing={2} pb={2}>
        {data.map((dataDetail, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CardComponent data={dataDetail} />
            </Grid>
          );
        })}
      </Grid>
      {innitData.length > 0 && data.length === innitData.length ? (
        <Typography variant="h6" textAlign={"center"} pb={2}>
          No more data found
        </Typography>
      ) : (
        <Typography variant="h6" textAlign={"center"} pb={2}>
          {innitData.length === 0
            ? "Loading..."
            : "Scroll down to Load more..."}
        </Typography>
      )}
    </Container>
  );
};

export default Home;
