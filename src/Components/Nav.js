import React from 'react';
import Flex from './Flex/Flex'
import FlexItem from './Flex/FlexItem'

import InjectSheet from 'react-jss';


const styles = {
    container: {
        display: "grid",
        gridTemplateColums: "1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
    },

    '@media (max-width: 630px)': {
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
            <nav className={classes.container}>
                <img src="/images/logo.png" className={classes.img}/>

                {/* <div> */}
                    {/* <Flex justifyContent="center" alignitems="center">
                        <FlexItem> */}
                        {/* <div>
                            <h1>Andrew Vasquez</h1>
                            <h3>Web Developer</h3>
                        </div> */}
                        {/* <img src="images/headshot.jpg"/> */}
                        {/* </FlexItem>
                    </Flex> */}
                {/* </div> */}
            </nav>
        </>
    )
}

const StyledNav = InjectSheet(styles)(Nav)

export default StyledNav;