import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: { maxWidth: 345, },
  media: { height: 140, }, 
});


export default function Cards2({spell, type, effect}) {

const classes = useStyles();

  return ( <Card className={classes.card}> <CardActionArea>

<CardMedia className={classes.media}
 /> <CardContent>
<Typography gutterBottom variant="h5" component="h2">
Name of spell: { spell } 
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Type of spell: { type } </Typography> </CardContent> </CardActionArea>
<Typography gutterBottom variant="h5" component="h2">
What does it do: { effect }
</Typography>
</Card> ); }