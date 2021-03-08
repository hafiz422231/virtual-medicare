import React from "react";
import {Circle} from "./Circle";
import {Colors} from "../utilities/GlobalColors";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainStyle : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        width: '85%',
    },
    span : {
        paddingLeft: '13px',
    },
    lineHeight: {
        height: '2px',
        background: Colors.primaryBlue,
        width: '20%',
        marginLeft: '-12px',
        // [theme.breakpoints.down("sm")]: {
        //     width: '100px',
        //     marginLeft: '-10px',
        // },
        [theme.breakpoints.down("md")]: {
            height: '1px',
        },
    }
}));

export const CircleInnerRow = ({ text, textColor, textSize, innerContent }) => {

    const classes = useStyles();

    const span = {
        fontSize: textSize,
        color: textColor,
    };

    return(

        <div className={classes.mainStyle}>

            <div className={classes.lineHeight}>

            </div>

            <Circle height="9vw" width="9vw" text={innerContent} color={Colors.primary} textSize="2.2vw"
             heightAdjusment={false}
            />

            <span style={span} className={classes.span}>
                {text}
            </span>

        </div>

    );

}