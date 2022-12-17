import { useUser } from "@auth0/nextjs-auth0/client";
import { Grid, Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TextArea } from "../form/TextArea";
import { TextInput } from "../form/TextField";
import axios from "axios";

export const ProfileForm = (props: {
  profileData:
    | {
        id: string;
        fields: {
          sub: string;
          twitterLink: string;
          emailAddress: string;
          name: string;
          linkedInLink: string;
          topicsTags: string;
          bio: string;
          websiteLink: string;
          createdDate: string;
        };
      }
    | undefined;
}) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState<{
    name: string | undefined;
    emailAddress: string | undefined;
    twitterLink: string | undefined;
    linkedInLink: string | undefined;
    websiteLink: string | undefined;
    topicsTags: string | undefined;
    bio: string | undefined;
  }>({
    name: "",
    emailAddress: "",
    twitterLink: "",
    linkedInLink: "",
    websiteLink: "",
    topicsTags: "",
    bio: "",
  });

  useEffect(() => {
    if (!props.profileData) return;

    props.profileData.fields &&
      setFormData({
        name: props.profileData.fields.name,
        emailAddress: props.profileData.fields.emailAddress,
        twitterLink: props.profileData.fields.twitterLink,
        linkedInLink: props.profileData.fields.linkedInLink,
        websiteLink: props.profileData.fields.websiteLink,
        topicsTags: props.profileData.fields.topicsTags,
        bio: props.profileData.fields.bio,
      });
  }, [props.profileData]);

  const submitProfileUpdates = async () => {
    if (!user || (user && !user.sub)) return;

    const submitRequest = await axios.post(
      `/api/speaker/profile/${user.sub}/submit`,
      {
        ...formData,
      }
    );

    //TODO: add callback + status notification
  };

  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={10}
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
              value={formData.name}
              label={"Name"}
              onChange={(event) => {
                const value = event.currentTarget.value;
                value &&
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      name: value,
                    };
                  });
              }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextInput
              name={"emailAddress"}
              value={formData.emailAddress}
              label={"Email Address"}
              onChange={(event) => {
                const value = event.currentTarget.value;
                value &&
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      emailAddress: value,
                    };
                  });
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={10}
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
              value={formData.twitterLink}
              label={"Twitter Profile Link"}
              onChange={(event) => {
                const value = event.currentTarget.value;
                value &&
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      twitterLink: value,
                    };
                  });
              }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextInput
              name={"linkedInLink"}
              value={formData.linkedInLink}
              label={"LinkedIn Profile Link"}
              onChange={(event) => {
                const value = event.currentTarget.value;
                value &&
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      linkedInLink: value,
                    };
                  });
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={10}
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
              value={formData.websiteLink}
              label={"Personal Website/Blog Link"}
              onChange={(event) => {
                const value = event.currentTarget.value;
                value &&
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      websiteLink: value,
                    };
                  });
              }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextInput
              name={"topicsTags"}
              value={formData.topicsTags}
              label={"Content Topic Tags"}
              helperText={"Separate tags with a comma"}
              onChange={(event) => {
                const value = event.currentTarget.value;
                value &&
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      topicsTags: value,
                    };
                  });
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid item xs={10}>
          <TextArea
            name={"bio"}
            value={formData.bio}
            label={"Bio"}
            rows={5}
            onChange={(event) => {
              const value = event.currentTarget.value;
              value &&
                setFormData((prevState) => {
                  return {
                    ...prevState,
                    bio: value,
                  };
                });
            }}
          />
        </Grid>
      </Grid>
      <Grid container marginBottom={4}>
        <Grid
          item
          xs={11}
          sx={{
            textAlign: {
              xs: "center",
              md: "right",
            },
          }}
        >
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
    </>
  );
};
