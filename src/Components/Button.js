import React from 'react';

import InjectSheet from 'react-jss';

const styles = {
    a: {
        color: "white",
        border: "solid 2px white",
        borderRadius: "5px",
        width: "6vw",
        minWidth: "100px",
        height: "2.5vw",
        minHeight: "40px",
        textDecoration: "none",
        // display: "block",
        fontWeight: "bold",
        margin: "10px",
        display: "flex",
        placeContent: "center",
        alignItems: "center",

        '&:hover': {
            cursor: "pointer"
        }

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