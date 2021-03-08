import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Colors} from "../utilities/GlobalColors";

import {Images} from "../utilities/Images";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '0px 100px 0px 30px',
        [theme.breakpoints.down("md")]: {
            padding: '0px 10px',
        },
    },
    card: {
        minWidth: '100%',
        borderRadius: 12,
        height: 190,
        marginBottom: 13,
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            height: 160,
        },
        [theme.breakpoints.down("sm")]: {
            height: 130,
        },
        [theme.breakpoints.down("xs")]: {
            height: 110,
        },
        position: "relative"
    },
    greenCard: {
        border: '2px solid green',
    },
    heading: {
        color: Colors.black,
        fontSize: '1.3vw',
        textAlign: "center",
        paddingTop: '150px',
        paddingBottom: '15px',
        [theme.breakpoints.down("xl")]: {
            paddingTop: '300px',
        },
        [theme.breakpoints.down("lg")]: {
            paddingTop: '200px',
        },
        [theme.breakpoints.down("md")]: {
            paddingTop: '150px',
        },
    },
    pic: {
        width: '5vw',
        height: '5vw',
    },
    name: {
        color: Colors.black,
        fontSize: '1.1vw',
        padding: '4px 0px'
    },
    designation: {
        color: Colors.greyBackground,
        fontSize: '9px',
        padding: '4px 0px'
    },
    tickIcon: {
        position: "absolute",
        right: '14px',
        top: '14px',
        fontSize: '1.8vw',
        color: 'green'
    },
    cardsize: {
        [theme.breakpoints.down("xs")]: {
            width: '65%',
            margin: '0 auto'
        },
    }
}));


const Avatars = ({ showHeading }) => {

    const classes = useStyles();

    const heading = showHeading === 1 ?
        'Easily select your doctor to check network status for the plans in your area.'
        : showHeading === 2 ? 'With visual prescription drug selection, lookup medications to estimate drug coverage costs for the calendar year.'
        : showHeading === 3 ? 'Continue to see your preferred pharmacy at the lowest cost with simple selection of local pharmacies.'
        : 'Compare the top plans in your area based on the coverage for your doctors, medications, and pharmacy preferrences.';

    return(

        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} sm={6} md={6}>
                <div className={classes.heading}>
                    {heading}
                </div>
            </Grid>
            <Grid item sm={6} md={6} className={classes.cardsize}>
                <img alt={``} src={Images.doctors} width="100%" height="100%" />
            </Grid>
        </Grid>

    );

}

export default Avatars;