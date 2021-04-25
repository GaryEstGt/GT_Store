import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://drive.google.com/uc?id=1IJNxOkF_2PQ9UmevXMBIcm9bQ3owGIwv"
          title="Laptop HP 15"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Laptop HP 15
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Q15000
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}