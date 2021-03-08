import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {CircleInnerRow} from "./CircleInnerRow";
import {InnerContentSetting} from "./InnerContentSetting";
import Avatars from "./Avatars";
import Slide from 'react-reveal/Slide';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 85,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 20
        },
    },
    setContainer: {
        height: 500,
        [theme.breakpoints.down("xl")]: {
            height: 1000
        },
        [theme.breakpoints.down("lg")]: {
            height: 750
        },
        [theme.breakpoints.down("md")]: {
            height: 500
        },
    },
}));

const Evaluate = () => {

    const classes = useStyles();

    return(

        <div className={classes.root}>

            <div className={classes.setContainer}>

                <InnerContentSetting>
                    <CircleInnerRow text="Doctors"
                                    textColor={`#515151`} textSize="2.6vw" innerContent={`A`} />
                </InnerContentSetting>
                <Slide right>
                    <Avatars showHeading={1} />
                </Slide>
            </div>

            <div className={classes.setContainer}>

                <InnerContentSetting>
                    <CircleInnerRow text="Medications"
                                    textColor={`#515151`} textSize="2.6vw" innerContent={`B`} />
                </InnerContentSetting>
                <Slide right>
                    <Avatars showHeading={2} />
                </Slide>
            </div>

            <div className={classes.setContainer}>

                <InnerContentSetting>
                    <CircleInnerRow text="Pharmacy"
                                    textColor={`#515151`} textSize="2.6vw" innerContent={`C`} />
                </InnerContentSetting>
                <Slide right>
                    <Avatars showHeading={3} />
                </Slide>
            </div>

            <div className={classes.setContainer}>

                <InnerContentSetting>
                    <CircleInnerRow text="Compare Plans"
                                    textColor={`#515151`} textSize="2.1vw" innerContent={`D`} />
                </InnerContentSetting>
                <Avatars showHeading={4} />
            </div>

        </div>

    );

}

export default Evaluate;