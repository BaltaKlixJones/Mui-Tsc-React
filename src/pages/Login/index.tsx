import React from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

type LoginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const { getError, getSuccess } = useNotification();
  const [logingData, setLoginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...logingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    LoginValidate.validate(logingData)
      .then(() => {
        getSuccess(JSON.stringify(logingData));
      })
      .catch((err) => {
        getError(err.message);
      });
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: ".5em" }}>
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              Iniciar Sesión
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="username"
                margin="normal"
                size="small"
                type="text"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                onChange={dataLogin}
              />
              <TextField
                name="password"
                margin="normal"
                size="small"
                fullWidth
                type="password"
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}                
                onChange={dataLogin}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
