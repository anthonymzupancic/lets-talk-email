import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ProtectedLayout } from "../../components/layouts/ProtectedMain";
import { useRouter } from "next/router";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { PageHeader } from "../../components/display/header/PageHeader";
import { TextInput } from "../../components/form/TextField";
import { TextArea } from "../../components/form/TextArea";
import axios from "axios";
import { ProfileForm } from "../../components/profile/ProfileForm";
import { PresentationContainer } from "../../components/profile/presentation/PresentationContainer";

export default function Profile() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  const [profileData, setProfileData] = useState<{
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
    }
  } | undefined>();

  useEffect(() => {
    if (!user) return;

    const fetchProfileFormData = async () => {
      const profileDataRequest = await axios.get(
        `/api/speaker/profile/${user.sub}/retrieve`
      );

      if(new RegExp(/^2/g).test(profileDataRequest.status.toString())){
        const speakerData = profileDataRequest.data;
        speakerData && setProfileData(speakerData)
      }
    };

    !profileData && fetchProfileFormData();
  }, [user, profileData]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    router.push("/");
  }

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
          <ProfileForm profileData={profileData}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <PresentationContainer user={user} />
        </Grid>
      </Grid>
    </ProtectedLayout>
  );
}
