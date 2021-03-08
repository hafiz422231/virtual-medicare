import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mainCircle: {
        width: '170px',
        height: '170px',
        [theme.breakpoints.down("md")]: {
            width: '130px',
            height: '130px',
        },
        [theme.breakpoints.down("sm")]: {
            width: '100px',
            height: '100px',
        },
        [theme.breakpoints.down("xs")]: {
            width: '60px',
            height: '60px',
        },
    }
}));

export const Circle = ({ color, height, width, text, textSize, heightAdjusment }) => {

    const classes = useStyles();

    const style = {
        width: !heightAdjusment ? width : classes.mainCircle,
        height: !heightAdjusment ? height : classes.mainCircle,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: textSize,
        borderRadius: '50%',
        background: color,
        color: 'white'
    };

    return <div style={style} className={heightAdjusment ? classes.mainCircle : ''}>
        {text}
    </div>
}