import React from "react";
import {Circle} from "./Circle";
import {Colors} from "../utilities/GlobalColors";
import {makeStyles} from "@material-ui/core/styles";
import './evaluate.css';

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
        // [theme.breakpoints.down("xs")]: {
        //     height: '1200px !important',
        //     width: '2px'
        // },
        // [theme.breakpoints.down("sm")]: {
        //     height: '700px !important',
        //     width: '2px'
        // },
        // [theme.breakpoints.down("md")]: {
        //     height: '2040px !important',
        // },
        // [theme.breakpoints.down("lg")]: {
        //     height: '3000px !important',
        // },
        // [theme.breakpoints.down("xl")]: {
        //     height: '4000px',
        // },
    }
}));

export const CircleRowEvaluate = ({ text, textColor, textSize, innerContent }) => {

    const classes = useStyles();

    const span = {
        fontSize: textSize,
        color: textColor,
    };

    return(

        <div className={classes.style}>

            <div className="setLineContainer">

                <Circle height="0px" width="0px" text={innerContent} color={Colors.primary} textSize="4vw"
                        heightAdjusment={true} />

                <div className={`evaluate-height`}>

                </div>
            </div>
            <span style={span} className={classes.span}>
                {text}
            </span>
        </div>

    );

}