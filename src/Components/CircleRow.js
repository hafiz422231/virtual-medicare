import React from "react";
import {Circle} from "./Circle";
import {Colors} from "../utilities/GlobalColors";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "baseline",
        justifyContent: "flex-start",
        position: 'relative',
        width: '100%'
    },
    span: {
        paddingLeft: '13px',
        // position: 'absolute',
        // top: '38px',
        // left: '200px',
        [theme.breakpoints.down("sm")]: {
            top: '58px',
            left: '190px',
        },
    },
    lineHeight: {
        background: Colors.primaryBlue,
        width: '3px',
        height: '600px',
        [theme.breakpoints.down("sm")]: {
            height: '800px !important',
            width: '2px'
        },
        [theme.breakpoints.down("md")]: {
            height: '1500px !important',
        },
        [theme.breakpoints.down("lg")]: {
            height: '1700px !important',
        },
        [theme.breakpoints.down("xl")]: {
            height: '2000px',
        },
    }
}));

export const CircleRow = ({ text, textColor, textSize, innerContent, lineHeights }) => {

    const classes = useStyles();

    const span = {
        fontSize: textSize,
        color: textColor,
    };

    const lineHeight = {
        height: lineHeights,
    };

    return(

        <div className={classes.style}>

            <div className="setLineContainer">

                <Circle height="0px" width="0px" text={innerContent} color={Colors.primary} textSize="4vw"
                        heightAdjusment={true} />

                <div className={classes.lineHeight}>

                </div>
            </div>
            <span style={span} className={classes.span}>
                {text}
            </span>
        </div>

    );

}