import React from "react";
import { Button } from "@material-ui/core";
import {Colors} from "../utilities/GlobalColors";

export const CustomButton = ({ title }) => {

    const style = {
        color: 'white',
        background: Colors.primaryBlue,
        width: '60%',
        height: '75px',
        textAlign: 'center',
        fontSize: '1.3vw'
    };

    return <Button style={style}>
        {title}
    </Button>
}