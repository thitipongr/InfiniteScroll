import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";

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
      <Box position={"relative"}>
        <Box
          component={"a"}
          href={url}
          target="_blank"
          minWidth={"100%"}
          minHeight={"100%"}
          position={"absolute"}
          zIndex={0}
        />
        <CardMedia component="iframe" src={url} sx={{ zIndex: -1 }} />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            whiteSpace: "nowrap",
            overflowY: "hidden",
            overflowX: "scroll",
          }}
        >
          {description}
        </Typography>
        <Stack spacing={1}>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ overflowY: "hidden", overflowX: "scroll" }}
          >
            {types.map((typesData) => (
              <Button
                variant="outlined"
                key={types.indexOf(typesData)}
                sx={{ minWidth: "auto", whiteSpace: "nowrap" }}
              >
                {typesData.toUpperCase()}
              </Button>
            ))}
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ overflowY: "hidden", overflowX: "scroll" }}
          >
            {topics.map((topicsData) => (
              <Button
                variant="text"
                key={topics.indexOf(topicsData)}
                sx={{ minWidth: "auto", whiteSpace: "nowrap" }}
              >
                {topicsData}
              </Button>
            ))}
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ overflowY: "hidden", overflowX: "scroll" }}
          >
            {levels.map((levelsData) => (
              <Button
                variant="contained"
                key={levels.indexOf(levelsData)}
                sx={{ minWidth: "auto", whiteSpace: "nowrap" }}
              >
                {levelsData}
              </Button>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
