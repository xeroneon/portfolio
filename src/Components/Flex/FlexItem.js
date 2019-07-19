import React from 'react';
import {render} from 'react-dom'

import InjectSheet from 'react-jss';
// import classes from '*.module.sass';

const styles = {
    flexItem: props => ({
        order: props.order,
        flexGrow: props.flexGrow,
        flexShrink: props.flexShrink,
        flexBasis: props.flexBasis,
        flex: props.flex,
        alignSelf: props.alignSelf,
    })
}


const FlexItem = ({classes, children}) => {

    return (
        <div className={classes.flexItem}>
            {children}
        </div>
    )
}

// FlexItem.defaultProps = {
//     flexBasis: 'auto',
//     flex: "0 1 auto"
// }

const StyledFlexItem = InjectSheet(styles)(FlexItem)

export default StyledFlexItem;