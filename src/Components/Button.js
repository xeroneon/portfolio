import React from 'react';

import InjectSheet from 'react-jss';


const styles = {
    a: {
        color: "white",
        border: "solid 2px white",
        borderRadius: "5px",
        width: "120px",
        height: "45px",
        textDecoration: "none",
        display: "block",
        textAlign: "center",
        fontWeight: "bold",
        lineHeight: "45px",
        margin: "10px"

    }
}

const Button = props => {

    const {classes} = props

    return(
        <>
            <a href={props.href} target={props.target ? "" : "_blank"} className={classes.a} onClick={props.onClick}>{props.name}</a>
        </>
    )
}

const StyledButton = InjectSheet(styles)(Button)

export default StyledButton;