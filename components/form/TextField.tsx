import { Typography, TextField, Grid, makeStyles } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  name: string;
  helperText?: string;
  variant?: "standard" | "outlined" | "filled";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = (props: Props) => {
  return (
    <Grid item sx={{ marginBottom: 4 }}>
      <Typography variant="button" color="white">
        {props.label}
      </Typography>
      <TextField
        id={props.name}
        variant={props.variant || "standard"}
        fullWidth
        sx={{
          backgroundColor: "#fff",
          paddingX: 2,
          borderBottom: "unset",
        }}
        onChange={props.onChange}
      />
      <Typography variant="caption" color="white">
        {props.helperText}
      </Typography>
    </Grid>
  );
};
