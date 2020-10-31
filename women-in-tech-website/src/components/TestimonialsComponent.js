import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container
        maxWidth="md"
        component="main"
        style={{ marginBottom: "100px" }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Testimonials
          </Typography>
        </Container>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader
                title="Client 1"
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                className={classes.cardHeader}
              />
              <CardContent>
                <p>
                  Occaecat ad fugiat deserunt pariatur sit ea eu est enim
                  cupidatat labore. Ad dolor deserunt aliqua dolore. Consectetur
                  eu amet ullamco commodo esse elit duis aliquip ad mollit sunt.
                  Labore dolore elit enim aliqua dolore amet aute.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader
                title="Client 2"
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                className={classes.cardHeader}
              />
              <CardContent>
                <p>
                  Occaecat ad fugiat deserunt pariatur sit ea eu est enim
                  cupidatat labore. Ad dolor deserunt aliqua dolore. Consectetur
                  eu amet ullamco commodo esse elit duis aliquip ad mollit sunt.
                  Labore dolore elit enim aliqua dolore amet aute.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardHeader
                title="Client 3"
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                className={classes.cardHeader}
              />
              <CardContent>
                <p>
                  Occaecat ad fugiat deserunt pariatur sit ea eu est enim
                  cupidatat labore. Ad dolor deserunt aliqua dolore. Consectetur
                  eu amet ullamco commodo esse elit duis aliquip ad mollit sunt.
                  Labore dolore elit enim aliqua dolore amet aute.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
