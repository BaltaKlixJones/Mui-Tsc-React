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
import { useAppSelector } from "../redux/hooks";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { CartComponent } from "./Cart";

export const NavBar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState<boolean>(false);
  const items = useAppSelector((state) => state.cartReducer);

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
              <Grid item sx={{cursor: "pointer"}} onClick={() => navigate("/")}>
                <Typography>Logo</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    color="primary"
                    onClick={() => handleStateViewDrawer()}
                  >
                    <Badge color="error" badgeContent={items.length}>
                      <ShoppingCartOutlined />
                    </Badge>
                  </IconButton>
                  <Button variant="contained" onClick={() => navigate("login")}>
                    Login
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => navigate("register")}
                  >
                    Register
                  </Button>
                </Stack>
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
