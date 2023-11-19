import React from "react";
import CardComponent from "../components/CardComponent";
import { Container, Grid } from "@mui/material";
import data from "../assets/mock/mock.json";

const Home = () => {
  const datax = data;
  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={2} columnSpacing={2}>
        {datax.map((dataDetail, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CardComponent data={dataDetail} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Home;
