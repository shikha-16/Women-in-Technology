
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import linkedin from '../../../images/social/linkedin.png';
import github from '../../../images/social/github.png';
import {members} from "../../../data/members";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    // fontSize:'1px',
  },
  heroContent: {
    padding: theme.spacing(4, 0, 4),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  cardMedia: {
    paddingTop: '80.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
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
              Meet the contributors
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          {members.map((a, i) => (
            <Grid item xs={12} sm={6} md={6}>
              <Card className="card-member">
                <CardMedia
                  className={classes.cardMedia}
                  image={a.image}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'center' }}
                  >
                    {a.name}
                  </Typography>
                  <h5 style={{ textAlign: 'center' }}>
                    {a.about}
                  </h5>
                  <h6 style={{ textAlign: 'center' }}>
                    {a.contribution}
                  </h6>
                  <div className={classes.linkss} style={{padding:"3px" , margin:"3px", fontSize:"5px"}}>
                    <a href={a.github}>
                      <img
                        style={{width:"50px", margin:"3px"}}
                        src={github}
                        alt="github profile"
                      />
                    </a>
                    <a href={a.linkedin}>
                      <img
                         style={{width:"50px", margin:"3px"}}
                        src={linkedin}
                        alt="linkedin profile"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
          </Grid>
        </Container>
      </main>
    </>
  );
}
