import React from "react";
import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";

type NotificationProps = {
  open: boolean;
  msg: string;
  severity: AlertColor | undefined;
  handleClose: () => void;
};

export const Notification: React.FC<NotificationProps> = ({
  open,
  msg,
  severity,
  handleClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} >
        <Typography>{msg}</Typography>
      </Alert>
    </Snackbar>
  );
};
