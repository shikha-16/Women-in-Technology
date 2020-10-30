import React from "react";
import DummyPersonIcon from "../images/person_110935.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function MemberComponent() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Meet the founder
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={DummyPersonIcon}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  Officia irure aliqua ullamco ut esse nisi aute id ullamco eu
                  minim et ea. Ex aliquip irure pariatur reprehenderit elit
                  occaecat fugiat aute do sunt pariatur enim tempor. Velit
                  laboris occaecat ut adipisicing do occaecat. Consectetur sint
                  Lorem veniam cillum tempor proident sunt. Dolore cillum
                  voluptate dolore cupidatat.
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
