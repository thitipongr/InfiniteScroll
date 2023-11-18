import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import React from "react";

type CardComponentType = {
  data: {
    id: number;
    description: string;
    url: string;
    types: string[];
    topics: string[];
    levels: string[];
  };
};
const CardComponent = (props: CardComponentType) => {
  const {
    data: { description, url, types, topics, levels },
  } = props;

  return (
    <Card variant="outlined">
      <CardMedia component="iframe" src={url} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {description}
        </Typography>
        <Stack spacing={1}>
          <Stack direction={"row"} spacing={1}>
            {types.map((typesData) => (
              <Button variant="outlined">{typesData}</Button>
            ))}
          </Stack>
          <Stack direction={"row"} spacing={1}>
            {topics.map((typesData) => (
              <Button variant="text">{typesData}</Button>
            ))}
          </Stack>
          <Stack direction={"row"} spacing={1}>
            {levels.map((typesData) => (
              <Button variant="contained">{typesData}</Button>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
