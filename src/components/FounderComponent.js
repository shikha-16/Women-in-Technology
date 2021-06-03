import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import DummyPersonIcon from '../images/person_110935.png';
import image from '../images/picx/shikha.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import youtube from '../images/youtube.png';
import instagram from '../images/instagram.png';

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
    // paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '50%',
    width: '50%', // 16:9
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: '20%',
  },
  cardContent: {
    flexGrow: 1,
    marginTop: '6%',
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
              color="textPrimary"
              gutterBottom
            >
              Meet the Founder
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={image}
                  title="Image title"
                  style={{ height: '10px', margin: 'center' }}
                />
                <h2 style={{ textAlign: 'center' }}>Shikha Bhat</h2>
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
                <ul className="sociall-icons">
                  <a href="https://github.com/shikha-16">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="follow-icon-1"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/shikha-b/">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="follow-icon-1"
                    />
                  </a>
                </ul>

                <CardContent className={classes.cardContent}>
                  Hi! I'm Shikha Bhat, I'm from Pune. I'm a second year Computer
                  Science student at BITS Pilani, Goa Campus. Ever since 8th
                  grade, Computer Science has fascinated me because it is the
                  essence of logic and problem solving, both of which I love. I
                  knew since then that I wanted computer science as my major in
                  college. In BITS, I've also taken up a minor in Humanities
                  because I want to work at the intersection of the computing
                  and social sciences. I want to be able to identify problems in
                  society and use data and computational methods to examine and
                  solve it in an efficient way. Apart from this, I strongly
                  believe that it is my responsibility to give back to the
                  community and that is why I have started the Women in Tech
                  community. Hope you find it useful!
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
