import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Java from "../images/Java.jpg";
import Python from "../images/Python.jpg";
import C from "../images/C.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Java}
          title="Java"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Java
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Java language
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Python}
          title="Python"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Python
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Python in 30 days
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={C}
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           C
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           C in 30 days
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}