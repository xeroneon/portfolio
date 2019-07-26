import React, { useState } from 'react';
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
        fontSize: "16px"
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
            minWidth: "20px",
            margin: "5px"
        }
    },

    infoButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        display: "grid",
        placeContent: "center",
        width: "20px",
        height: "20px",
        border: "white solid 2px",
        borderRadius: "50%",
        fontSize: "14px"
    },

    info: {
        // background: "#212121",
        padding: "20px",
        borderRadius: "20px 20px 0 0"
    },  

    '@media (max-width: 1024px)': {

    },

    '@media (max-width: 1350px)': {
        container: {
            gridTemplateColumns: "1fr !important",
            gridTemplateRows: "auto",
            height: "auto !important",
            padding: "0"
        },
        h1: {
            padding: "10px",
            fontSize: "3vw"
        },
        tech: {
            display: "none"
        },
        buttons: {
            flexDirection: "row",
            justifyContent: "start",
            marginLeft: "10px",
            marginBottom: "20px"
        },
        img: {
            borderRadius: "0 0 20px 20px"
        },
        imgDiv: {
            padding: "0 !important",
            alignItems: "flex-end !important",
        },
        p: {
          fontSize: "14px",
          display: "none"
        }
      },

      '@media (max-width: 700px)': {
        h1: {
            fontSize: "7vw"
        }
      }
}

const PortfolioItem = props => {

    const { classes, tech } = props;

    const [ infoOpen, setInfoOpen ] = useState(false);

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
                    <div className={classes.infoButton} onClick={() => setInfoOpen(!infoOpen)}>{infoOpen ? "X" : "i"}</div>
                    <div className={classes.info} style={{display: infoOpen ? "block" : "none"}}>
                        <p>{props.summary}</p>

                    </div>
                    <div className={classes.tech}>
                        {tech.map(item => {
                            return <img src={`/images/${item}.png`} alt={item} key={item + props.image}/>
                        })}

                    </div>
                    <div style={{display: infoOpen ? "none" : "block"}}>
                        <h1 className={classes.h1}>{props.title}</h1>
                        <p className={classes.p}>{props.summary}</p>
                    </div>
                    <div className={classes.buttons}>
                        { props.repo && <Button name="REPO" href={props.repo} />}
                        <Button name="LIVE SITE" href={props.link} />

                    </div>
                    <div className={classes.imgDiv}>
                        <img src={props.image} className={classes.img} alt={props.image}/>
                    </div>
                </animated.div>
        </>
    )
}

const StyledPortfolioItem = InjectSheet(styles)(PortfolioItem)

export default StyledPortfolioItem;