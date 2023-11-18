import React from "react";
import CardComponent from "../components/CardComponent";
import { Container, Grid } from "@mui/material";

const Home = () => {
  const data = [
    {
      id: 162,
      description: "Treehouse",
      url: "https://teamtreehouse.com",
      types: ["lab", "interactive course", "video", "tutorial"],
      topics: [
        "design",
        "php",
        "iOS",
        "android",
        "java",
        "c#",
        "game development",
        "databases",
        "wordpress",
        "html",
        "css",
        "javascript",
        "ruby",
      ],
      levels: ["intermediate", "beginner"],
    },
    {
      id: 167,
      description: "Udemy Udemy Udemy Udemy Udemy Udemy Udemy Udemy Udemy Udemy Udemy Udemy Udemy ",
      url: "https://www.udemy.com",
      types: ["podcast", "video", "tutorial"],
      topics: [
        "nodejs",
        "rails",
        "python",
        "php",
        "iOS",
        "android",
        "java",
        "c#",
        "html",
        "css",
        "javascript",
        "ruby",
      ],
      levels: ["intermediate", "beginner"],
    },
  ];
  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data.map((dataDetail, index) => {
          return (
            <Grid item md={3} key={index}>
              <CardComponent data={dataDetail} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Home;
