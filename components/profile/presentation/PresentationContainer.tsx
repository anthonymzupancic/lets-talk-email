import { Grid } from "@mui/material";
import React from "react";
import { PresentationCard } from "./PresentationCard";

interface Props {
  user: any;
}

export const PresentationContainer = (props: Props) => {
  return (
    <Grid container xs={11} direction={'column'} gap={4} sx={{ marginX: 'auto', justifyContent: "center" }}>
      <PresentationCard
        avatar={props.user.picture}
        title={"Talk Title 1"}
        description={"my description is cool"}
      />
      <PresentationCard
        avatar={props.user.picture}
        title={"Talk Title 1"}
        description={"my description is cool"}
      />
      <PresentationCard
        avatar={props.user.picture}
        title={"Talk Title 1"}
        description={"my description is cool"}
      />
      <PresentationCard
        avatar={props.user.picture}
        title={"Talk Title 1"}
        description={"my description is cool"}
      />
      <PresentationCard
        avatar={props.user.picture}
        title={"Talk Title 1"}
        description={"my description is cool"}
      />
      <PresentationCard
        avatar={props.user.picture}
        title={"Talk Title 1"}
        description={"my description is cool"}
      />
    </Grid>
  );
};
