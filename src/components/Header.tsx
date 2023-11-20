import { AppBar, Avatar, Container, Stack, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar sx={{ boxShadow: 0, position: "sticky", mb: 2 }}>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={1} my={1} justifyContent={"center"}>
          <Avatar
            alt="Thitipong"
            src="https://avatars.githubusercontent.com/u/144009672"
          />
          <Typography variant="h4" display={{ xs: "none", sm: "flex" }}>
            Hi there Infinite Scroll
          </Typography>
          <Typography variant="h4" display={{ xs: "flex", sm: "none" }}>
            Infinite Scroll
          </Typography>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Header;
