import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {subHeaderData} from "../utilities/Data";

const useStyles = makeStyles((theme) => ({

  mainTextCon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00a99d",
    height: 80,
    width: "100%",
    // paddingTop: 25,
    // paddingBottom: 5,
    [theme.breakpoints.up("sm")]: {
      marginTop: 70,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 80,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 90,
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: 100,
    }
  },
  subHeadImg: {
    width: "2vw",
  },
  subHeadText: {
    fontSize: "2vw",
    fontFamily: "sans-serif",
    color: "white",
    paddingTop: 20,
    paddingRight: 40,
    [theme.breakpoints.down("sm")]: {
      paddingRight: 30,
    },
  },
}));

const SubHeader = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.mainTextCon}>

      {

        subHeaderData.map((d, index) => (
            <Typography className={classes.subHeadText} key={index}>
              {d.text}{" "}
              <img
                  className={classes.subHeadImg}
                  src={d.src}
                  alt="checkmark"
              />
            </Typography>
        ))

      }

    </Typography>
  );
};

export default SubHeader;
