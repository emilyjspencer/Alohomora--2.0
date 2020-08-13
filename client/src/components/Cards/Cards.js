import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Name of Spell
        </Typography>
        <Typography variant="h5" component="h2">
          Al{bull}ber{bull}to{bull}
        </Typography>
        <br />
        <Typography className={classes.pos} color="textSecondary">
          Type of spell
        </Typography>
        <Typography variant="body2" component="p">
          Charm
          <br />
          <br />
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          What does the spell do?
        </Typography>
        <Typography variant="body2" component="p">
          Opens objects
          <br />
        </Typography>
      </CardContent>
      
    </Card>
  );
}