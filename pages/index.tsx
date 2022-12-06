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
      <main className={styles.main}>
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
              color="initial"
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
            md={10}
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
              color="initial"
              sx={{
                fontSize: {
                  xs: 18,
                },
                paddingX: {
                  xs: 5,
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
              color="initial"
              sx={{
                fontSize: {
                  xs: 18,
                },
                paddingX: {
                  xs: 5,
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
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </MainLayout>
  );
}
