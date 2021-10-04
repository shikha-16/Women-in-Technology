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
        maxWidth: 345,
        marginBottom:'8px',
        marginTop:"8px",
        justifyContent:"center",
        textAlign:"center",
    },
    media: {
        height: 140,
    },
});

export default function EventsPage() {
  const classes = useStyles();

  return (
      <h1 className="eventHeading" style={{ paddingTop: 60 }}>
      Events/Programs
    </h1>
<div className="cardevent">
{eventList.map((a, i) => (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
        <a href = {a.link}   
          style={{
              color: "inherit",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          target="_blank"
          rel="noreferrer"
        >
          <Typography gutterBottom variant="h5" component="h2">
           {a.topic}
          </Typography>
           </a>        
        </CardContent>
      </CardActionArea>
    </Card>
))}
</div>

}


