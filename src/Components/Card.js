import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Images} from "../utilities/Images";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        fontSize: '1vw'
    },
    media: {
        height: '100%',
    },
    h2: {
        fontSize: '1vw'
    },
    p: {
        fontSize: '.9vw'
    },
    cardArea: {
        background: 'whitesmoke'
    },
    cardActions: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        [theme.breakpoints.down("xs")]: {
            flexDirection: "column",
            alignItems: "start",
        }
    }
}));

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.cardArea}>
                <CardMedia
                    className={classes.media}
                    image={Images.cardPic}
                    component="img"
                    alt="Contemplative Reptile"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.h2}>
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" className={classes.h2}>
                    Share
                </Button>
                <Button size="small" color="primary" className={classes.h2}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
