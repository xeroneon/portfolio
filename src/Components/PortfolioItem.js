import React from 'react';
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
        borderRadius: "40px",
        height: "300px" }),
    p: {
        width: "80%",
        fontSize: "2vw"
    },
    h1: {
        fontSize: "3vw"
    },
    buttons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    img: {
        width: "100%",
        borderRadius: "30px"
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

    '@media (min-width: 1024px)': {
        p: {
          fontSize: "1vw"
        }
      }
}

const PortfolioItem = props => {

    const { classes, tech } = props;

    const something = useSpring({
        to: async (next, cancel) => {
            await next({opacity: .5, transform: "scale(1.1)"})
            await next({opacity: .7, transform: "scale(0.9)"})
            await next({opacity: 1, transform: "scale(1)"})


          },
        from: {opacity: 0, transform: "scale(0)"},
        config: {duration: 100}
    })

    return (
        <>
                <animated.div style={something} className={classes.container}>
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