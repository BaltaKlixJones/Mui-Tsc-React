import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Grid,
  Button,
  Typography,
  Stack,
  IconButton,
  Badge,

} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { FavoriteBorder } from "@mui/icons-material";
import { CartComponent } from "./Cart";
import { logout } from "../redux/slices/auth.slice";

export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState<boolean>(false);
  const items = useAppSelector((state) => state.cartReducer);
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const dispacth = useAppDispatch();

  const handlerLogout = () => {
    dispacth(logout());
    navigate("/login");
  };

  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid
                item
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                <Typography>Home</Typography>
              </Grid>
              <Grid item>
                {isAuth ? (
                  <Stack direction="row" spacing={5}>
                    <IconButton
                      color="primary"
                      onClick={() => handleStateViewDrawer()}
                    >
                      <Badge color="error" badgeContent={items.length}>
                        <FavoriteBorder />
                      </Badge>
                    </IconButton>
                    <Button variant="contained" onClick={() => handlerLogout()}>
                      {" "}
                      Logout
                    </Button>
                  </Stack>
                ) : (
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      onClick={() => navigate("login")}
                    >
                      Login
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => navigate("register")}
                    >
                      Register
                    </Button>
                  </Stack>
                )}
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <CartComponent
        open={open}
        handleStateViewDrawer={handleStateViewDrawer}
      />
    
    </Box>
  );
};
