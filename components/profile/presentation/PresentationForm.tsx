import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Grid,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TextArea } from "../../form/TextArea";
import { TextInput } from "../../form/TextField";
import axios from "axios";
import { uuid } from "uuidv4";

export const PresentationForm = (props: {
  presentationData:
    | {
        id: string;
        fields: {
          sub: string;
          presentationId: string;
          title: string;
          description: string;
          status: string;
          slideDeckLink: string;
          showPresentation: true | false;
          youtubeLink: string;
        };
      }
    | undefined;
}) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  const [formData, setFormData] = useState<{
    sub: string | undefined;
    presentationId: string | undefined;
    title: string | undefined;
    description: string | undefined;
    status: string | undefined;
    slideDeckLink: string | undefined;
    showPresentation: true | false;
    youtubeLink: string | undefined;
  }>({
    presentationId:
      (props.presentationData &&
        props.presentationData.fields &&
        props.presentationData.fields.presentationId) ||
      "",
    sub:
      (props.presentationData &&
        props.presentationData.fields &&
        props.presentationData.fields.sub) ||
      "",
    title:
      (props.presentationData &&
        props.presentationData.fields &&
        props.presentationData.fields.title) ||
      "",
    description:
      (props.presentationData &&
        props.presentationData.fields &&
        props.presentationData.fields.description) ||
      "",
    status:
      (props.presentationData &&
        props.presentationData.fields &&
        props.presentationData.fields.status) ||
      "",
    slideDeckLink:
      (props.presentationData &&
        props.presentationData.fields &&
        props.presentationData.fields.slideDeckLink) ||
      "",
    showPresentation:
      (props.presentationData &&
        props.presentationData.fields &&
        props.presentationData.fields.showPresentation) ||
      false,
    youtubeLink:
      (props.presentationData &&
        props.presentationData.fields &&
        props.presentationData.fields.youtubeLink) ||
      "",
  });

  const handlePresentationSubmit = async () => {
    if (!user || (user && !user.sub)) return;

    const presentationData = {
        ...formData,
        presentationId: uuid(),
        sub: user.sub,
    }
    const submitRequest = await axios.post(
      `/api/presentation/user/${user.sub}/new`,
      {
        ...presentationData
      }
    );
  };

  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        {JSON.stringify(formData)}
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
          <Grid item xs={12}>
            <TextInput
              name={"title"}
              value={formData.title}
              label={"Title"}
              onChange={(event) => {
                const value = event.currentTarget.value;
                value &&
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      title: value,
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
            name={"description"}
            value={formData.description}
            label={"Description"}
            rows={5}
            onChange={(event) => {
              const value = event.currentTarget.value;
              value &&
                setFormData((prevState) => {
                  return {
                    ...prevState,
                    description: value,
                  };
                });
            }}
          />
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
              name={"slideDeckLink"}
              value={formData.slideDeckLink}
              label={"Deck Link"}
              onChange={(event) => {
                const value = event.currentTarget.value;
                value &&
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      slideDeckLink: value,
                    };
                  });
              }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <TextInput
              name={"youtubeLink"}
              value={formData.youtubeLink}
              label={"YouTube Link"}
              onChange={(event) => {
                const value = event.currentTarget.value;
                value &&
                  setFormData((prevState) => {
                    return {
                      ...prevState,
                      youtubeLink: value,
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
          alignItems="center"
          sx={{
            display: {
              xs: "block",
              md: "flex",
            },
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={5}>
            <Typography variant={'button'}
            >
                Presentation Status
            </Typography>
            <FormControl variant={'standard'} fullWidth >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    paddingX: 2
                }}
            
                value={formData.status}
                onChange={(event) => {
                    const value = event.target.value;
                    setFormData((prevState) => {
                        return {
                          ...prevState,
                          status: value,
                        };
                      });
                }}
              >
                <MenuItem value={'active'}>Active</MenuItem>
                <MenuItem value={'inactive'}>Inactive</MenuItem>
                <MenuItem value={'in_progress'}>In Progress</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={5}>
            <Checkbox
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
              checked={formData.showPresentation ? true : false}
              onChange={(event) => {
                const value = event.target.checked;
                console.log(value);
                setFormData((prevState) => {
                  return {
                    ...prevState,
                    showPresentation: value,
                  };
                });
              }}
            />{" "}
            Presentation Visible
          </Grid>
        </Grid>
      </Grid>
      <Grid container paddingY={4}>
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
            onClick={handlePresentationSubmit}
          >
            Save Profile
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
