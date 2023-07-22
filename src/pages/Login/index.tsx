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
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/slices/auth.slice";
import { Navigate, useNavigate } from "react-router-dom";

type LoginType = {
  username: string;
  password: string;
};

const LoginPage: React.FC<{}> = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { getSuccess } = useNotification();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik<LoginType>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: () => {
      dispatch(login());
      navigate("/");
      // getSuccess(JSON.stringify(values));
      getSuccess("Login Success");
    },
  });

  return isAuth ? (
    <Navigate to="/" replace />
  ) : (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 10 }}
          justifyContent="center"
          display="flex"
          alignItems="center"
        >
          Inicia sesion con cualquier cuenta
        </Typography>
        
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: ".5em" }}>
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              Iniciar Sesión
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <TextField
                name="username"
                margin="normal"
                size="small"
                type="text"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                name="password"
                margin="normal"
                size="small"
                fullWidth
                type="password"
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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

export default LoginPage;
