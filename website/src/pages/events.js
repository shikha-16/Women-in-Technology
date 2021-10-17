import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "./events.css";
import {eventList} from "../data/eventList.js"

const useStyles = makeStyles({
    root: {
        width: 345,
        margin:'auto',
        marginBottom:'8px',
        marginTop:"8px",
        display: 'grid',
        placeItems:'center',
        textAlign:"center",
    },
    media: {
        height: 140,
    },
});

export default function EventsPage() {
  const classes = useStyles();

  return (
     <div>
      <h1 className="eventHeading" style={{ marginTop:'4rem' }}>
      Events/Programs
    </h1>
    <div className="cardevent">
{eventList.map((a, i) => (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
        <a href = {a.link} target="_blank">
          <Typography gutterBottom variant="h5" component="h2">
           {a.topic}
          </Typography>
           </a>
          
        </CardContent>
      </CardActionArea>
    </Card>
))}
</div>

</div>
 
  )
}
