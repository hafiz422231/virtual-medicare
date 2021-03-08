import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {CustomButton} from "./Button";
import {CircleInnerRow} from "./CircleInnerRow";
import {InnerContentSetting} from "./InnerContentSetting";
import {Colors} from "../utilities/GlobalColors";
import Slide from 'react-reveal/Slide';
import MediaCard from "./Card";
import {Images} from "../utilities/Images";
import CalenderCard from "./CalenderCard";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 85,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 20
        },
    },
    setA: {
        height: 150,
        [theme.breakpoints.down("xl")]: {
            height: 300
        },
        [theme.breakpoints.down("lg")]: {
            height: 170
        },
        [theme.breakpoints.down("md")]: {
            height: 150
        },
    },
    setB: {
        height: 150,
        [theme.breakpoints.down("xl")]: {
            height: 300
        },
        [theme.breakpoints.down("lg")]: {
            height: 200
        },
        [theme.breakpoints.down("md")]: {
            height: 150
        },
    },
    seminar: {
        width: '100%',
        height: '625px',
        background: Colors.greyBackground,
        marginBottom: '40px',
        paddingTop: '20px',
        [theme.breakpoints.down("sm")]: {
            height: '425px',
            paddingTop: '14px',
        },
        [theme.breakpoints.down("xs")]: {
            height: '225px',
            paddingTop: '8px',
        },
    },
    flexCol: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    },
    showFlexCol: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 0px'
        },
    },
    flexRow: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    spanHeading: {
        color: '#515151',
        fontSize: '21px',
        marginBottom: '12px'
    },
    formGroup: {
        color: Colors.black,
        fontSize: '2.4vw',
        margin: '20px 0px',
        textAlign: "center"
    },
    setBGrid: {
        width: '100%',
        background: Colors.greyBackground,
        // height: '450px',
        // [theme.breakpoints.down("sm")]: {
        //     height: '250px',
        // },
    },
    calender: {
        marginTop: '25px'
    }
}));

const Educate = () => {

    const classes = useStyles();

    return(

        <div className={classes.root}>

            <div className={classes.setA}>

                <InnerContentSetting>
                    <CircleInnerRow text="Virtual Medicare Seminars"
                                    textColor={`#515151`} textSize="2.6vw" innerContent={`A`} />
                </InnerContentSetting>

            </div>

            <Slide right>

                <Grid container spacing={2}>

                    <Grid item xs={12} sm={12}>

                        <div className={classes.showFlexCol}>
                            <span className={classes.spanHeading}>Next Live Seminar</span>

                            <div className={classes.flexRow}>

                                <div className={classes.formGroup}>
                                    55<br />Days
                                </div>

                                <div className={classes.formGroup}>
                                    12<br />Hours
                                </div>

                                <div className={classes.formGroup}>
                                    10<br />Minutes
                                </div>

                            </div>

                            <CustomButton title={`Register`} />

                        </div>

                    </Grid>

                    <Grid item xs={12} sm={12} md={8}>
                        <div className={classes.seminar}>
                            <CalenderCard />
                            <CalenderCard />
                            <CalenderCard />
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <div className={classes.flexCol}>

                            <span className={classes.spanHeading}>Next Live Seminar</span>

                            <div className={classes.formGroup}>
                                55<br />Days
                            </div>

                            <div className={classes.formGroup}>
                                12<br />Hours
                            </div>

                            <div className={classes.formGroup}>
                                10<br />Minutes
                            </div>

                            <CustomButton title={`Register`} />

                        </div>
                    </Grid>
                </Grid>

            </Slide>

            <div className={classes.setB}>

                <InnerContentSetting>
                    <CircleInnerRow text="On-Demand Videos"
                                    textColor={`#515151`} textSize="2.6vw" innerContent={`B`} />
                </InnerContentSetting>

            </div>

            <Slide right>

                <Grid container spacing={2} className={classes.setBGrid}>
                    <Grid item xs={4}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={4}>
                        <MediaCard />
                    </Grid>
                    <Grid item xs={4}>
                        <MediaCard />
                    </Grid>
                </Grid>

            </Slide>

        </div>

    );

}

export default Educate;