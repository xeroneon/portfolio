import React from 'react';
import {render} from 'react-dom'

import InjectSheet from 'react-jss';
// import classes from '*.module.sass';

const styles = {
    flex: props => ({
        display: 'flex',
        flexDirection: props.flexDirection,
        flexWrap: props.flexWrap,
        flexFlow: props.flexFlow,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        alignContent: props.alignContent,
        height: props.height
    })

}


const Flex = props => {

    const {classes, children} = props;

    return (
        <div className={classes.flex}>
            {children}
        </div>
    )
}

const StyledFlex = InjectSheet(styles)(Flex)

export default StyledFlex;