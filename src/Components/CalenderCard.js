import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import {Colors} from "../utilities/GlobalColors";
import {IoChevronForwardCircleOutline} from 'react-icons/all';

const useStyles = makeStyles(theme => ({
    outerStyle: {
        background: "whitesmoke",
        width: '100%',
        height: '182px',
        padding: '10px 20px 20px 20px',
        marginBottom: '20px',
        [theme.breakpoints.down("sm")]: {
            height: '115px',
            marginBottom: '14px',
        },
        [theme.breakpoints.down("xs")]: {
            height: '76px',
            marginBottom: '8px',
        },
    },
    root: {
        width: '100%',
        fontSize: '1vw',
        borderRadius: '12px',
        position: "relative"
    },
    cardRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
    },
    cardColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    cardColumn2: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "flex-start",
    },
    cardH5: {
        color: Colors.black,
        fontSize: '4vw',
        margin: '0px'
    },
    cardSpan: {
        color: "gray",
        fontSize: '2vw',
        margin: '0px'
    },
    cardExtra: {
        padding: '16px 30px',
        [theme.breakpoints.down("md")]: {
            padding: '12px 30px',
        },
        [theme.breakpoints.down("sm")]: {
            padding: '8px 30px',
        },
        [theme.breakpoints.down("xs")]: {
            padding: '6px 30px',
        }
    },
    cardBorderLine: {
        height: '90px',
        width: '2px',
        background: "grey",
        margin: '0px 40px',
        [theme.breakpoints.down("md")]: {
            height: '80px',
            margin: '0px 32px',
        },
        [theme.breakpoints.down("sm")]: {
            height: '65px',
            margin: '0px 20px',
        },
        [theme.breakpoints.down("xs")]: {
            height: '40px',
        },
    },
    cardHeading: {
        color: Colors.black,
        fontSize: '2vw',
        margin: '3px 0px'
    },
    cardDate: {
        fontWeight: "bold",
        color: "blue",
        fontSize: '2vw',
        margin: '0px'
    },
    cardRightArrow: {
        position: "absolute",
        top: '20px',
        right: '20px',
        fontSize: '2.3vw',
        color: 'gray',
        opacity: .8,
        [theme.breakpoints.down("sm")]: {
            top: '10px',
            right: '10px',
        },
    }
}));

export default function CalenderCard() {
    const classes = useStyles();

    return (
        <div className={classes.outerStyle}>
            <Card className={classes.root}>
                <CardActionArea>

                    <div className={classes.cardExtra}>

                        <div className={classes.cardRow}>

                            <div className={classes.cardColumn}>

                                <h5 className={classes.cardH5}>19</h5>
                                <span className={classes.cardSpan}>JUL</span>

                            </div>

                            <div className={classes.cardBorderLine}></div>

                            <div className={classes.cardColumn2}>
                                <p className={classes.cardDate}>12:00PM  -  05:00PM</p>
                                <h5 className={classes.cardHeading}>Makers Mania - Ottobot</h5>
                                <span className={classes.cardSpan}>Chennai</span>
                            </div>

                        </div>

                        <IoChevronForwardCircleOutline className={classes.cardRightArrow} />
                    </div>

                </CardActionArea>
            </Card>
        </div>
    );
}