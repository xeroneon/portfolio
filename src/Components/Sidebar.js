import React, { useState } from 'react';
import Button from './Button'

import InjectSheet from 'react-jss';


const styles = {
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px"
  },
  all: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    '& img': {
      width: "15%"
    }
  },
  headshot: {
    display: "grid",
    gridTemplateColumns: "1fr",
    alignContent: "center",
    justifyItems: "center",

    '& img': {
      width: "50%",
      borderRadius: "50%",
      marginTop: "30px"
    }
  },
  tech: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    '& img': {
      width: "35%",
      margin: "20px 10px 20px 10px",
      justifySelf: "center",
      alignSelf: "center",

    }
  },
  techImg: {
    '&:hover': {
      cursor: "pointer"
    }
  },
  filter: {
    textAlign: "center"
  },
  drawerButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "grid",
    placeContent: "center",
    width: "20px",
    height: "20px",
    border: "white solid 2px",
    borderRadius: "50%"
  },

  '@media (max-width: 1024px)': {

    sideMenu: {
      position: "fixed !important",
      height: "100vh !important",
      width: "600px",
      top: "0",
      right: props => props.open ? "0" : "-600px",
      transition: "right .5s",
      zIndex: "1",
      background: "#000",
      overflowY: "scroll"

    },

    headshot: {
        '& img': {
            width: "40%"
        }
    }
  }
}


const Sidebar = props => {

  const { classes } = props
  const [tech, setTech] = useState("")

  const setAll = () => {
    setTech("");
  }

  return (
    <>
        <div className={classes.sideMenu}>
            <div className={classes.drawerButton} onClick={ () => props.close()}>X</div>
          <div className={classes.headshot}>
            <img src="images/headshot.jpg"></img>
          </div>

          <div className={classes.links}>
            <Button name="Github" href="https://github.com/xeroneon" />
            <Button name="LinkedIn" href="https://www.linkedin.com/in/andrew-vasquez-659062126/" />
          </div>
          <div className={classes.filter}>
            <h1>Filter Projects</h1>
          </div>

          <div className={classes.all}>
            {/* <Button onClick={() => setAll()} name="All" target /> */}
            {/* <div onClick={() => setAll()}>All</div> */}
            <img onClick={() => setAll()} src="/images/all.png" />
          </div>

          <div className={classes.tech}>
            <img className={classes.techImg} onClick={() => setTech("mongo")} src="/images/mongo.png" />
            <img className={classes.techImg} onClick={() => setTech("mysql")} src="/images/mysql.png" />
            <img className={classes.techImg} onClick={() => setTech("react")} src="/images/react.png" />
            <img className={classes.techImg} onClick={() => setTech("firebase")} src="/images/firebase.png" />
            <img className={classes.techImg} onClick={() => setTech("node")} src="/images/node.png" />
            <img className={classes.techImg} onClick={() => setTech("js")} src="/images/js.png" />
            <img className={classes.techImg} onClick={() => setTech("express")} src="/images/express.png" />
            <img className={classes.techImg} onClick={() => setTech("handlebars")} src="/images/handlebars.png" />
            <img className={classes.techImg} onClick={() => setTech("html")} src="/images/html.png" />
            <img className={classes.techImg} onClick={() => setTech("css")} src="/images/css.png" />
            <img className={classes.techImg} onClick={() => setTech("wordpress")} src="/images/wordpress.png" />
          </div>
        </div>
    </>
  );
}

const StyledSidebar = InjectSheet(styles)(Sidebar)

export default StyledSidebar;
