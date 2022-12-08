import { Typography } from "@mui/material";
import React from "react";

export const PageHeader = (props: {
    header: string
}) => {
  return (
    <Typography
      variant={"h4"}
      fontWeight={600}
      sx={{ textTransform: "uppercase" }}
    >
      {props.header}
    </Typography>
  );
};
