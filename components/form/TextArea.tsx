import { Typography, TextField, Grid } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  name: string;
  rows: number;
  variant?: "standard" | "outlined" | "filled";
  helperText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextArea = (props: Props) => {
  return (
    <Grid item sx={{ marginBottom: 4 }}>
      <Typography variant="button" color="white">
        {props.label}
      </Typography>
      <TextField
        id={props.name}
        variant={props.variant || "standard"}
        fullWidth
        multiline
        rows={props.rows}
        sx={{
          backgroundColor: "#fff",
          paddingY: 2,
          paddingX: 2,
        }}
        inputProps={{
          borderBottom: 'none'
        }}
        onChange={props.onChange}
      />
      <Typography variant="caption" color="white">
        {props.helperText}
      </Typography>
    </Grid>
  );
};
