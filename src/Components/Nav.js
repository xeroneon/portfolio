import React from 'react';
import Flex from './Flex/Flex'
import FlexItem from './Flex/FlexItem'

const Nav = () => {
    return (
        <>
            <nav>

                {/* <div> */}
                    <Flex justifyContent="center" alignitems="center">
                        <FlexItem>
                            <h1>Andrew Vasquez</h1>
                            <h3>Web Developer</h3>
                        </FlexItem>
                    </Flex>
                {/* </div> */}
            </nav>
        </>
    )
}

export default Nav;