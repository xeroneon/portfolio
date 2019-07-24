import React, { useState, useEffect } from 'react';
import Flex from './Flex/Flex'
import FlexItem from './Flex/FlexItem'
import Button from './Button'

import InjectSheet from 'react-jss';

import {useSpring, animated} from 'react-spring'

const styles = {
    container: props => ({
        display: "grid",
        gridTemplateColumns: ".5fr 4fr 1fr 3fr",
        backgroundImage: `linear-gradient(${props.gradient || '#FFAA54, #EFB52E'})`,
        width: "100%",
        marginBottom: "20px",
        borderRadius: "20px",
        height: "15vw" }),
    p: {
        width: "80%",
        fontSize: "1vw"
    },
    h1: {
        fontSize: "2.5vw"
    },
    buttons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    img: {
        width: "100%",
        borderRadius: "20px",
    },
    imgDiv: {
        padding: "10px",
        paddingRight: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    tech: {
        padding: "15px",
        display: "grid",
        gridTemplateRows: "repeat(auto)",
        justifyContent: "center",
        alignContent: "center",
        '& img': {
            width: "90%",
            margin: "5px"
        }
    },

    '@media (max-width: 1024px)': {
        container: {
            gridTemplateColumns: "1fr !important",
            gridTemplateRows: "auto",
            height: "auto !important",
            padding: "0"
            // gridTemplateRows: "1fr 1fr 1fr 1fr",
        },
        h1: {
            padding: "5px"
        },
        tech: {
            display: "none"
        },
        buttons: {
            flexDirection: "row",
            justifyContent: "start"
        },
        imgDiv: {
            padding: "0",
            marginTop: "20px"
        },
        p: {
          fontSize: "14px",
          display: "none"
        }
      }
}

const PortfolioItem = props => {

    const { classes, tech } = props;

    const [width, setWidth ] = useState(window.innerWidth);
    const [ isMobile, setIsMobile ] = useState()

    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         setWidth(window.innerWidth)
    //         if(window.innerWidth > 1024) {
    //             setIsMobile(false)
    //         } else {
    //             setIsMobile(true)
    //         }
    //     });

    //     if(window.innerWidth > 1024) {
    //         setIsMobile(false)
    //     } else {
    //         setIsMobile(true)
    //     }

    //     // if(window.inner)
    //     console.log(window.innerWidth)
    // }, [])

    const bounceIn = useSpring({
        to: async (next, cancel) => {
            await next({opacity: 1, transform: "scale(1.05)"})
            await next({opacity: 1, transform: "scale(0.95)"})
            await next({opacity: 1, transform: "scale(1)"})


          },
        from: {opacity: 0, transform: "scale(0.4)"},
        config: {duration: 120}
    })

    return (
        <>
                <animated.div style={bounceIn} className={classes.container}>
                    {/* {!isMobile && */}
                    <div className={classes.tech}>
                        {tech.map(item => {
                            return <img src={`/images/${item}.png`}/>
                        })}

                        {/* {console.log(props.tech)} */}

                    </div>
                    <div>
                        <h1 className={classes.h1}>{props.title}</h1>
                        <p className={classes.p}>{props.summary}</p>
                    </div>
                    <div className={classes.buttons}>
                        <Button name="REPO" href={props.repo} />
                        <Button name="LIVE SITE" href={props.link} />

                    </div>
                    <div className={classes.imgDiv}>
                        <img src={props.image} className={classes.img}/>
                    </div>
                </animated.div>
        </>
    )
}

const StyledPortfolioItem = InjectSheet(styles)(PortfolioItem)

export default StyledPortfolioItem;