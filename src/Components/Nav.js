import React from 'react';

import InjectSheet from 'react-jss';


const styles = {
    container: {
        display: "grid",
        gridTemplateColums: "1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        filter: props => props.open ? "blur(20px)" : "none",

        width: "100%",
        height: "200px",
        color: "white",
        fontFamily: "'Montserrat', sans-serif",
        "& h1": {
          fontSize: "60px",
          fontWeight: "bold",
          padding: "3px",
          margin: "0",
        },
        "& h3": {
          textAlign: "right",
          fontWeight: "100",
          fontSize: "50px",
          margin: "0",
          padding: "5px",
        }

    },


    '@media (max-width: 630px)': {
        container: {
            height: "130px"
        },
        img: {
            width: "70%",
            justifySelf: "center"
        }
    }
}

const Nav = props => {
    const {classes} = props

    return (
        <>
            <nav className={classes.container} onClick={() => props.close()}>
                <img src="/images/logo.png" className={classes.img} alt="Andrew Vasquez Logo"/>
            </nav>
        </>
    )
}

const StyledNav = InjectSheet(styles)(Nav)

export default StyledNav;