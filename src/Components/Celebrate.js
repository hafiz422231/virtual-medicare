import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {CustomButton} from "./Button";
import {CircleInnerRow} from "./CircleInnerRow";
import {Colors} from "../utilities/GlobalColors";
import {Images} from "../utilities/Images";
import {InnerContentSetting} from "./InnerContentSetting";
import Slide from 'react-reveal/Slide';
import {TextBox} from "./TextBox";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 85,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 20
        },
    },
    setA: {
        height: 520,
        [theme.breakpoints.down("xl")]: {
            height: 740
        },
        [theme.breakpoints.down("lg")]: {
            height: 650
        },
        [theme.breakpoints.down("md")]: {
            height: 500
        },
    },
    setB: {
        height: 520,
        [theme.breakpoints.down("xl")]: {
            height: 740
        },
        [theme.breakpoints.down("lg")]: {
            height: 700
        },
        [theme.breakpoints.down("md")]: {
            height: 600
        },
    },
    setC: {
        height: 150
    },
    vectorMargin: {
        marginTop: 140,
        marginBottom: 40,
        width: '10vw',
        height: '10vw',
        [theme.breakpoints.down("xl")]: {
            marginTop: 250,
            width: '8vw',
            height: '8vw',
        },
        [theme.breakpoints.down("lg")]: {
            marginTop: 200,
            width: '8vw',
            height: '8vw',
        },
        // [theme.breakpoints.down("md")]: {
        //     height: 500
        // },
    },
    containerMargin: {
        marginTop: 200,
        [theme.breakpoints.down("md")]: {
            marginTop: 150,
        },
    },
    flexAdjustments: {
        flexGrow: 1,
        maxWidth: '100%',
        flexBasis: 0,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    }
}));

const Celebrate = () => {

    const classes = useStyles();

    return(

        <div className={classes.root}>

            <div className={classes.setA}>

                <InnerContentSetting>
                    <CircleInnerRow text="Industry Leading Customer Support"
                                    textColor={Colors.black} textSize="2.6vw" innerContent={`A`} />
                </InnerContentSetting>

                <Slide right>

                    <Grid container spacing={2}>
                        <Grid item xs className={classes.flexAdjustments}>
                            <img alt={``} src={Images.comment} className={classes.vectorMargin} />
                            <CustomButton title={`Live Chat`} />
                        </Grid>
                        <Grid item xs className={classes.flexAdjustments}>
                            <img alt={``} src={Images.headphones} className={classes.vectorMargin} />
                            <CustomButton title={`On The Phone`} />
                        </Grid>
                        <Grid item xs className={classes.flexAdjustments}>
                            <img alt={``} src={Images.boxMsg} className={classes.vectorMargin} />
                            <CustomButton title={`Email`} />
                        </Grid>
                    </Grid>

                </Slide>

            </div>

            <div className={classes.setB}>
                <InnerContentSetting>
                    <CircleInnerRow text="Annual Plan Reviews"
                                    textColor={Colors.black} textSize="2.6vw" innerContent={`B`} />
                </InnerContentSetting>

                <Slide right>

                    <Grid container spacing={4}>
                        <Grid item xs={6} sm={5} md={5} lg={3} xl={3} className={classes.containerMargin}>
                            <img alt={``} width="100%" src={Images.calenders} />
                        </Grid>
                        <Grid item xs={6} sm={7} md={7} lg={9} xl={9} className={classes.containerMargin}>
                            <TextBox />
                        </Grid>
                    </Grid>

                </Slide>

            </div>

            <div className={classes.setB}>
                <InnerContentSetting>
                    <CircleInnerRow text="Peace of Mind"
                                    textColor={Colors.black} textSize="2.6vw" innerContent={`C`} />
                </InnerContentSetting>

                <Slide right>

                    <Grid container spacing={4} className={classes.setB}>
                        <Grid item xs={6} sm={7} md={7} lg={9} xl={9} className={classes.containerMargin}>
                            <TextBox />
                        </Grid>
                        <Grid item xs={6} sm={5} md={5} lg={3} xl={3} className={classes.containerMargin}>
                            <img alt={``} width="100%" src={Images.hands} />
                        </Grid>
                    </Grid>

                </Slide>

            </div>

        </div>

    );

}

export default Celebrate;