/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MainLayout } from "../components/layouts/Main";
import { Divider, Grid, Typography } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  
  return (
    <MainLayout>
        <Grid container>
          <Grid
            xs={11}
            md={5}
            sx={{
              marginX: "auto",
              textAlign: {
                xs: "center",
              },
            }}
          >
            <Typography
              variant={"h3"}
              fontWeight={600}
              sx={{ textTransform: "uppercase" }}
            >
              Welcome, <br /> now Lets Talk Email!
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8} sx={{ marginX: "auto", marginY: 3 }}>
            <Divider
              sx={{ borderColor: "#fff", borderWidth: 1, width: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              marginX: "auto",
              marginY: 4,
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              color="#ffffff"
              sx={{
                fontSize: {
                  xs: 18,
                },
                paddingX: {
                  xs: 5,
                },
              }}
            >
              Lets Talk Email is an Open-Source community resource for
              EmailGeeks across the industry who are either speakers (both
              active and looking to get started) and event coordinators looking
              for speakers.
            </Typography>
          </Grid>
        </Grid>
        <Grid container marginY={10}>
          <Grid
            xs={11}
            md={9}
            sx={{
              marginX: "auto",
              textAlign: {
                xs: "center",
              },
            }}
          >
            <Typography
              variant={"h4"}
              fontWeight={600}
              sx={{ textTransform: "uppercase" }}
            >
              What's the plan
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              marginX: "auto",
              marginY: 4,
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              color="#ffffff"
              sx={{
                fontSize: {
                  xs: 18,
                },
                paddingX: {
                  xs: 3,
                },
              }}
            >
              Speakers, create entries and fill out details about your
              presentations. Once you have your details down, you can make them
              public; which will allow event coordinators to view and contact
              you so that you and your content can be scheduled and put front
              and center!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              marginX: "auto",
              marginY: 4,
              display: "flex",
            }}
          >
            <Typography
              variant="body1"
              color="#ffffff"
              sx={{
                fontSize: {
                  xs: 18,
                },
                paddingX: {
                  xs: 3,
                },
              }}
            >
              Event Coordinators, if you've ever found yourself thinking about
              what to feature on your next webinar, podcast episode, or
              in-person event; you can use the searchable list of
              speakers/topics to feature in your upcoming events!
            </Typography>
          </Grid>
        </Grid>
    </MainLayout>
  );
}
