import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Images} from "../utilities/Images";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import {Colors} from "../utilities/GlobalColors";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '220px',
        [theme.breakpoints.down("sm")]: {
            height: '180px',
        },
        [theme.breakpoints.down("xs")]: {
            height: '130px',
        },
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    mainStyle: {
        width: '100%',
        height: 'auto',
        border: '1px solid grey',
        background: 'whitesmoke',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '8px 100px',
        marginTop: '50px',
        position: "absolute",
        left: 0,
        right: 0,
        [theme.breakpoints.down("sm")]: {
            padding: '6px 30px',
        },
    },
    flexStyle: {
        width: '100%',
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    para: {
        fontSize: '.9vw',
        color: 'gray'
    },
    button: {
        width: '75%',
        borderRadius: '50px',
        color: 'white',
        fontSize: '.8vw',
        background: Colors.primary,
        padding: '2px 12px',
        textTransform: 'capitalize',
        [theme.breakpoints.down("md")]: {
            padding: '2px 10px',
        },
        [theme.breakpoints.down("xs")]: {
            width: '80%',
            padding: '2px 10px',
        },
    },
    headphone: {
        fontSize: '2.2vw'
    }
}));

const Footer = (props) => {

    const classes = useStyles();

    return(

        <div className={classes.root}>
            <div className={classes.mainStyle}>

                <Grid container spacing={5}>

                    <Grid item xl={3} lg={3} md={4} sm={4} xs={4}>

                        <div className={classes.flexStyle}>

                            <img alt={``} src={Images.logo} width="100%" />

                            <p className={classes.para}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur at .</p>

                        </div>

                    </Grid>
                    <Grid item xl={3} lg={3} md={4} sm={4} xs={4} className={classes.grid}>

                        <Button className={classes.button}>
                            <span style={{ marginRight: '3px' }}>Call Us:</span>
                            <HeadsetMicIcon className={classes.headphone} />
                            <span style={{ marginLeft: '3px' }}>+123456789</span>
                        </Button>

                    </Grid>
                    <Grid item xl={6} lg={6} md={4} sm={4} xs={4} className={classes.grid}>
                        <p className={classes.para}>
                            Copyright &copy; 2020 VirtualMedicare.com All rights reserved. Made with
                            <FavoriteIcon color="secondary" fontSize="small" />.
                        </p>
                    </Grid>
                </Grid>

            </div>
        </div>

    );

}

export default Footer;