import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { PageHeader } from "../../components/display/header/PageHeader";
import { ProtectedLayout } from "../../components/layouts/ProtectedMain";
import { PresentationContainer } from "../../components/profile/presentation/PresentationContainer";
import { PresentationForm } from "../../components/profile/presentation/PresentationForm";
import { ProfileForm } from "../../components/profile/ProfileForm";

export default function NewPresentation() {
  const [formData, setFormData] = useState<{
    sub: string;
    presentationId: string;
    title: string;
    description: string;
    status: string;
    slideDeckLink: string;
    showPresentation: boolean;
    youtubeLink: string;
  }>({
    sub: "",
    presentationId: "",
    title: "",
    description: "",
    status: "",
    slideDeckLink: "",
    showPresentation: true,
    youtubeLink: "",
  });

  return (
    <ProtectedLayout>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: {
            md: 5,
          },
        }}
      >
        <PageHeader header="Your Profile" />
      </Grid>
      <Grid
        container
        sx={{
          paddingX: {
            xs: 1,
            md: 5,
          },
        }}
      >
        <Grid item xs={12} md={6}>
          <PresentationForm
            presentationData={{ id: "", fields: formData }}
          />
        </Grid>
      </Grid>
    </ProtectedLayout>
  );
}
