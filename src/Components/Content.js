import React from "react";
import './content.css';
import {CircleRow} from "./CircleRow";
import {Colors} from "../utilities/GlobalColors";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Celebrate from "./Celebrate";
import Educate from "./Educate";
import Evaluate from "./Evaluate";
import {CircleRowEvaluate} from "./CircleRowEvaluate";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        marginTop: '200px'
    }
}));

const Content = () => {

    const classes = useStyles();

    return(

        <div className="main-content">

            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <CircleRow text="Educate" textColor={Colors.primaryBlue} textSize="5vw"
                               innerContent={`1`} lineHeights="1550px" />
                </Grid>
                <Grid item xs>
                    <div className={classes.margin}>
                        <Educate />
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={1}>
                    <CircleRowEvaluate text="Evaluate" textColor={Colors.primaryBlue} textSize="5vw"
                               innerContent={`2`} />
                </Grid>
                <Grid item xs>
                    <div className={classes.margin}>
                        <Evaluate />
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={2} sm={2} md={1} lg={1} xl={1}>
                    <CircleRow text="Celebrate" textColor={Colors.primaryBlue}
                               textSize="5vw" innerContent={`3`} lineHeights="1200px" />
                </Grid>
                <Grid item xs={10} sm={10} md={11} lg={11} xl={11}>
                    <div className={classes.margin}>
                        <Celebrate />
                    </div>
                </Grid>
            </Grid>

        </div>

    );

}

export default Content;