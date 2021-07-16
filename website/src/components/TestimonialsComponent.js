// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardHeader from '@material-ui/core/CardHeader';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import StarIcon from '@material-ui/icons/StarBorder';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   '@global': {
//     ul: {
//       margin: 0,
//       padding: 0,
//       listStyle: 'none',
//     },
//   },
//   appBar: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//   },
//   toolbar: {
//     flexWrap: 'wrap',
//   },
//   toolbarTitle: {
//     flexGrow: 1,
//   },
//   link: {
//     margin: theme.spacing(1, 1.5),
//   },
//   heroContent: {
//     padding: theme.spacing(8, 0, 6),
//   },
//   cardHeader: {
//     backgroundColor:
//       theme.palette.type === 'light'
//         ? theme.palette.grey[200]
//         : theme.palette.grey[700],
//   },
//   cardPricing: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'baseline',
//     marginBottom: theme.spacing(2),
//   },
//   // footer: {
//   //   borderTop: `1px solid ${theme.palette.divider}`,
//   //   marginTop: theme.spacing(8),
//   //   paddingTop: theme.spacing(3),
//   //   paddingBottom: theme.spacing(3),
//   //   [theme.breakpoints.up('sm')]: {
//   //     paddingTop: theme.spacing(6),
//   //     paddingBottom: theme.spacing(6),
//   //   },
//   // },
// }));

// export default function Pricing() {
//   const classes = useStyles();

//   return (
//     <>
//       <Container
//         maxWidth="md"
//         component="main"
//         style={{ marginBottom: '100px' }}
//       >
//         <Container maxWidth="sm">
//           <Typography
//             component="h1"
//             variant="h2"
//             align="center"
//             color="textPrimary"
//             gutterBottom
//           >
//             Testimonials
//           </Typography>
//         </Container>
//         <Grid container spacing={5} alignItems="flex-end">
//           <Grid item xs={12} sm={6} md={6}>
//             <Card>
//               <CardHeader
//                 title="Astitva"
//                 titleTypographyProps={{ align: 'center' }}
//                 subheaderTypographyProps={{ align: 'center' }}
//                 className={classes.cardHeader}
//               />
//               <CardContent>
//                 <p>
//                 This community has made me more aware about the lack of diversity in STEM. This has motivated me too to support women i know personally who are already in STEM / trying to enter STEM. By the amazing discord server and repository it has highlighted key issues women face, and being a male I try to keep these in mind while working in groups, etc. so that I can do my part at a personal level to equalise the status quo.
//                 </p>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={6}>
//             <Card>
//               <CardHeader
//                 title="Shivangi Singh"
//                 titleTypographyProps={{ align: 'center' }}
//                 subheaderTypographyProps={{ align: 'center' }}
//                 className={classes.cardHeader}
//               />
//               <CardContent>
//                 <p>
//                 I have been part of the community past 6 months and there is always something new on the server to look upto. The community helped me know about several programs happening in-out. From shying away to ask doubts to having discussions on various topics, all of it is because of the supportive environment in the community.
// Women oriented events, workshops, various scholarships everything can be found. Its like we name it and they have it.
// I would definitely like recommend people to be a part of this amazing community.
//                 </p>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={6}>
//             <Card>
//               <CardHeader
//                 title="Siddhi Parashar"
//                 titleTypographyProps={{ align: 'center' }}
//                 subheaderTypographyProps={{ align: 'center' }}
//                 className={classes.cardHeader}
//               />
//               <CardContent>
//                 <p>
//                 This is an amazing platform. It has provided me with a lot of resources and an opportunity to connect with other women in tech. I'm really proud of Shikha to have started this initiative, I would definitely recommend anyone who wants easy access to resources and opportunities to join this server and be a part of the community!
//                 </p>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={6}>
//             <Card>
//               <CardHeader
//                 title="Ayushi Dubal"
//                 titleTypographyProps={{ align: 'center' }}
//                 subheaderTypographyProps={{ align: 'center' }}
//                 className={classes.cardHeader}
//               />
//               <CardContent>
//                 <p>
//                 Women in Technology is an awesome community with a great curation of resources and opportunities. The people in the community are dedicated, helpful, and enthusiastic. I have found many opportunities and good reads on the platform, and am very glad to be a part of the movement!
//                 </p>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={5}>
//             <Card>
//               <CardHeader
//                 title="Kolli Sudeepa"
//                 titleTypographyProps={{ align: 'center' }}
//                 subheaderTypographyProps={{ align: 'center' }}
//                 className={classes.cardHeader}
//               />
//               <CardContent>
//                 <p>
//                 Women in Technology is a community, a girl ever wishes to join. Be it the repo or the discord channel, it has been very helpful in finding resources. It's like a one-stop tech zone for a girl in knowing about opportunities, competitions, webinars and various events.
//                 </p>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }


// // smriti anonymous



import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Tests.css"


export default class TestimonialsComponent extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Kolli Sudeepa</h3>

            <p>
            Women in Technology is a community, a girl ever wishes to join. Be it the repo or the discord channel, it has been very helpful in finding resources. It's like a one-stop tech zone for a girl in knowing about opportunities, competitions, webinars and various events.
            </p>
          </div>
        </div>

        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" style={{width:"200px",borderRadius:"50%"}}/> */}
          <div className="myCarousel">
            <h3>Astitva </h3>

            <p>
            This community has made me more aware about the lack of diversity in STEM. This has motivated me too to support women i know personally who are already in STEM / trying to enter STEM. By the amazing discord server and repository it has highlighted key issues women face, and being a male I try to keep these in mind while working in groups, etc. so that I can do my part at a personal level to equalise the status quo.
            </p>
          </div>
        </div>

        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Ayushi Dubal</h3>

            <p>
            Women in Technology is an awesome community with a great curation of resources and opportunities. The people in the community are dedicated, helpful, and enthusiastic. I have found many opportunities and good reads on the platform, and am very glad to be a part of the movement!
            </p>
          </div>
        </div>
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Shivangi Singh</h3>

            <p className="Carousel-text">I have been part of the community past 6 months and there is always something new on the server to look upto. The community helped me know about several programs happening in-out. From shying away to ask doubts to having discussions on various topics, all of it is because of the supportive environment in the community.
Women oriented events, workshops, various scholarships everything can be found. Its like we name it and they have it.
I would definitely like recommend people to be a part of this amazing community.            </p>
          </div>
        </div>
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Siddhi Parashar</h3>

            <p>This is an amazing platform. It has provided me with a lot of resources and an opportunity to connect with other women in tech. I'm really proud of Shikha to have started this initiative, I would definitely recommend anyone who wants easy access to resources and opportunities to join this server and be a part of the community!            </p>
          </div>
        </div>
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Aitana</h3>

            <p>Thanks to WTM I have met a lot of interesting people and companies in which I can have an opportunity in the future ✨            </p>
          </div>
        </div>
        <div>
          {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"style={{width:"200px",borderRadius:"50%"}} /> */}
          <div className="myCarousel">
            <h3>Anonymous</h3>

            <p>This community provided me with very useful resources for the technologies that I am learning right now. Along with it, the members are just too helpful. Whether it comes to a small bug or "What to use to make a good resume" , they all come to help. I am glad to be a part of this community✨✨            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
