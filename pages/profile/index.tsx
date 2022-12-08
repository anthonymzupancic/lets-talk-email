import React, { useState } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ProtectedLayout } from "../../components/layouts/ProtectedMain";
import { useRouter } from "next/router";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { PageHeader } from "../../components/display/header/PageHeader";
import { TextInput } from "../../components/form/TextField";
import { TextArea } from "../../components/form/TextArea";
export default function Profile() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState<{
    name: string | unknown;
    emailAddress: string | unknown;
    twitterLink: string | unknown;
    linkedInLink: string | unknown;
    websiteLink: string | unknown;
    topicsTags: string | unknown;
    bio: string | unknown;
  }>({
    name: null,
    emailAddress: null,
    twitterLink: null,
    linkedInLink: null,
    websiteLink: null,
    topicsTags: null,
    bio: null,
  })

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    router.push("/");
  }


  const submitProfileUpdates = () => {}

  return (
    <ProtectedLayout>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <PageHeader header="Your Profile" />
      </Grid>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={11}
          md={6}
          sx={{
            display: {
              xs: "block",
              md: "flex",
            },
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={5}>
            <TextInput
              name={"name"}
              label={"Name"}
              onChange={(event) => {
                
                console.log(event.currentTarget.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextInput
              name={"emailAddress"}
              label={"Email Address"}
              onChange={(event) => {
                
                console.log(event.currentTarget.value);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={11}
          md={6}
          sx={{
            display: {
              xs: "block",
              md: "flex",
            },
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={5}>
            <TextInput
              name={"twitterLink"}
              label={"Twitter Profile Link"}
              onChange={(event) => {
                
                console.log(event.currentTarget.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextInput
              name={"linkedInLink"}
              label={"LinkedIn Profile Link"}
              onChange={(event) => {
                
               
                console.log(event.currentTarget.value);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={11}
          md={6}
          sx={{
            display: {
              xs: "block",
              md: "flex",
            },
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={5}>
            <TextInput
              name={"websiteLink"}
              label={"Personal Website/Blog Link"}
              onChange={(event) => {
                console.log(event.currentTarget.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextInput
              name={"topicsTags"}
              label={"Content Topic Tags"}
              helperText={"Separate tags with a comma"}
              onChange={(event) => {
                console.log(event.currentTarget.value);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item xs={11} md={6}>
          <TextArea
            name={"bio"}
            label={"Bio"}
            rows={5}
            onChange={(event) => {
              console.log(event.currentTarget.value);
            }}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" marginBottom={4}>
        <Grid item xs={11} md={6} textAlign={"right"}>
          <Button
            variant="contained"
            color="info"
            sx={{
              backgroundColor: "#008080",
              "&:hover": {
                backgroundColor: "#004c4c",
              },
            }}
            onClick={submitProfileUpdates}
          >
            Save Profile
          </Button>
        </Grid>
      </Grid>
    </ProtectedLayout>
  );
}
