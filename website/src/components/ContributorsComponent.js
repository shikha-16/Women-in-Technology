import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import Neha from '../images/picx/Neha.jpg';
import Astitva from '../images/picx/Astitva_Sehgal.jpeg';
import Kolli from '../images/picx/Kolli_Sudeepa.jpg';
import Shriya from '../images/picx/Shriya_singh.png';
import Bharati from '../images/picx/Bharati.jpg';
import image2 from '../images/picx/Victory.jpeg';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    // fontSize:'1px',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 4),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '90.25%', // 16:9
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
              color="textPrimary"
              gutterBottom
            >
              Meet the contributors
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Neha}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'center' }}
                  >
                    Neha Kalbande
                  </Typography>
                  <h5 style={{ textAlign: 'center' }}>
                    Full Stack Web & Android Developer, ML/AI Learning Enthusiast
                  </h5>
                  <h6 style={{ textAlign: 'center' }}>
                    Women In Technology Website Developer
                  </h6>
                  <div className="linksy " style={{padding:"3px" , margin:"3px", fontSize:"15px"}}>
                    <a href="https://github.com/nehakalbande/">
                      <img
                        className="links__item"
                        src={github}
                        alt="github profile"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/neha-kalbande-314ab71a7/">
                      <img
                        className="links__item"
                        src={linkedin}
                        alt="linkedin profile"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Shriya}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'center' }}
                  >
                    Shriya Singh
                  </Typography>
                  <h5 style={{ textAlign: 'center' }}>
                  Product Designer and Researcher
                  </h5>
                  <h6 style={{ textAlign: 'center' }}>
                 Worked on Visual/Graphic Designer
                  </h6>
                  <div className="links">
                    <a href="https://github.com/shriy-singh">
                      <img
                        className="links__item"
                        src={github}
                        alt="github profile"
                      />
                    </a>
                    <a href="https://www.linkedin.com/shriy-singh">
                      <img
                        className="links__item"
                        src={linkedin}
                        alt="linkedin profile"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Kolli}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'center' }}
                  >
                    Kolli Sudeepa

                  </Typography>
                  <h5 style={{ textAlign: 'center' }}>
                  Research Intern DRDL, Google WTM Scholar'20.
                  </h5>
                  <h6 style={{ textAlign: 'center' }}>
                  Worked on Scholarships part and added previous scholars experiences. 
                  </h6>
                  <div className="links">
                    <a href="https://github.com/SudeepaNoble">
                      <img
                        className="links__item"
                        src={github}
                        alt="github profile"
                      />
                    </a>
                    <a href="https://www.linkedin.com/sudeepanoble">
                      <img
                        className="links__item"
                        src={linkedin}
                        alt="linkedin profile"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Astitva}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'center' }}
                  >
                    Astitva
                  </Typography>
                  <h5 style={{ textAlign: 'center' }}>
                  BE CS + MSc Phy undergraduate
                  </h5>
                  <h6 style={{ textAlign: 'center' }}>
                  PR to readme updating changes to a scholarship
                  </h6>
                  <div className="links">
                    <a href="https://github.com/astitva1905">
                      <img
                        className="links__item"
                        src={github}
                        alt="github profile"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/astitva-sehgal-25353a1b4/">
                      <img
                        className="links__item"
                        src={linkedin}
                        alt="linkedin profile"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image=""
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'center' }}
                  >
                   Rishabh Khandelwal

                  </Typography>
                  <h5 style={{ textAlign: 'center' }}>
                  Electronics and Instrumentation undergraduate at BITS Hyderabad
                  </h5>
                  <h6 style={{ textAlign: 'center' }}>
                  Added Inspirations page to the Women in Tech website
                  </h6>
                  <div className="links">
                    <a href="https://github.com/rishkwal">
                      <img
                        className="links__item"
                        src={github}
                        alt="github profile"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/rishkwal/">
                      <img
                        className="links__item"
                        src={linkedin}
                        alt="linkedin profile"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Bharati}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'center' }}
                  >
                   Bharati Subramanian
                  </Typography>
                  <h5 style={{ textAlign: 'center' }}>
                  enthusiastic about web development, UI/UX design, and problem solving
                  </h5>
                  <h6 style={{ textAlign: 'center' }}>
                  Added about us and carousel designs PR#59
                  </h6>
                  <div className="links">
                    <a href="https://github.com/bharati-21">
                      <img
                        className="links__item"
                        src={github}
                        alt="github profile"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/bharati-subramanian-29734b152/">
                      <img
                        className="links__item"
                        src={linkedin}
                        alt="linkedin profile"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image=""
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'center' }}
                  >
                  Umang Sinha

                  </Typography>
                  <h5 style={{ textAlign: 'center' }}>
                  A mobile app developer and a UI/UX Designer
                  </h5>
                  <h6 style={{ textAlign: 'center' }}>
                  Worked on the website

                  </h6>
                  <div className="links">
                    <a href="https://github.com/umang-sinha">
                      <img
                        className="links__item"
                        src={github}
                        alt="github profile"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/umang-sinha/">
                      <img
                        className="links__item"
                        src={linkedin}
                        alt="linkedin profile"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={image2}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: 'center' }}
                  >
                    victory brown
                  </Typography>
                  <h5 style={{ textAlign: 'center' }}>
                  User experience designer and Open Source Design evangelist. A member of sustain oss
                  </h5>
                  <h6 style={{ textAlign: 'center' }}>
                    Contributed to carousel designs for website
                  </h6>
                  <div className="links">
                    <a href="https://github.com/Victorybrown">
                      <img
                        className="links__item"
                        src={github}
                        alt="github profile"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/victory-brown-8a154b1b5/">
                      <img
                        className="links__item"
                        src={linkedin}
                        alt="linkedin profile"
                      />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
