import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import image from "../../images/members/shikha.jpeg";
import "./Founder.css";
import linkedin from "../../images/social/linkedin.png";
import github from "../../images/social/github.png";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: "50%",
    width: "50%", // 16:9
    justifyContent: "center",
    alignContent: "center",
    margin: "auto",
    marginTop: "15px"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function MemberComponent() {
  const classes = useStyles();

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              Meet the Founder
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Card className="card">
                <CardMedia
                  className={classes.cardMedia}
                  image={image}
                  title="Image title"
                  style={{ height: "10px", margin: "center" }}
                />
                <h2 style={{ textAlign: "center" }}>Shikha Bhat</h2>
                {/* <div className="links">
                  <a href="https://github.com/shikha-16">
                    <img
                      className="links__item"
                      src={github}
                      alt="github profile"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/shikha-b/">
                    <img
                      className="links__item"
                      src={linkedin}
                      alt="linkedin profile"
                    />
                  </a>
                </div> */}
                <ul className="links">
                  <a href="https://github.com/shikha-16">
                    <img
                      className="links__item"
                      src={github}
                      alt="github profile"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/shikha-b/">
                    <img
                      className="links__item"
                      src={linkedin}
                      alt="linkedin profile"
                    />
                  </a>
                </ul>

                <CardContent className="card-content">
                  Hi, I'm Shikha Bhat! I'm a third-year student pursuing
                  Computer Science at BITS Pilani, Goa Campus. I'm keen to work
                  at the intersection of computing and social sciences; to be
                  able to identify problems in society and use technology to
                  solve them. I have enjoyed being a part of diverse social
                  impact projects like my research on clinical data analysis and
                  prediction models for COVID-19 patients, implementation of
                  robot path planning algorithms and the creation of Prithvi, a
                  web extension for eco-friendly products. Lately I've been
                  exploring the domains of Machine Learning and Data Science,
                  and I really love it! I'm also a 2021 recipient of the
                  Generation Google Scholarship APAC for women in computer
                  science. I strongly believe that it is my responsibility to
                  give back to the community and that is why I have started this
                  initiative. Hope you find it useful!
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
