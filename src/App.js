import React, { useState } from 'react';

import Nav from './Components/Nav'
import logo from './logo.svg';
import './App.scss';
import Portfolio from './Components/Portfolio';
import Button from './Components/Button'
import Sidebar from './Components/Sidebar'

import InjectSheet from 'react-jss';

import {useSpring, animated} from 'react-spring'


const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
  },
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
  portfolio: {
    background: "#424242",
    borderRadius: "0 30px 0 0"
  },

  '@media (min-width: 1025px)': {
    drawerButton: {
        display: "none"
    }
  },

  '@media (max-width: 1024px)': {
    container: {
      gridTemplateColumns: "1fr",
      // filter: "blur(20px)"
    },
    portfolio: {
      background: "#212121",

    },  

    sideMenu: {
      position: "fixed !important",
      height: "100vh !important",
      width: "600px",
      top: "0",
      right: "-600px",
      zIndex: "1",
      background: "#000",
      // filter: "blur(20px)"

    },
  }
}


const App = props => {

  const { classes } = props
  const [tech, setTech] = useState("")
  const [ open, setOpen ] = useState(false)

  const setAll = () => {
    setTech("");
    setOpen(false)
  }

  const updateTech = tech => {
    setTech(tech)
    setOpen(false)
  }

  const close = () => {
    setOpen(false)
  }

  return (
    <>
      <Nav open={open} close={() => close()} />
      <div className={classes.drawerButton} onClick={() => setOpen(!open)}>i</div>
      <div className={classes.container}>
        <div className={classes.portfolio}>
          <Portfolio selTech={tech} open={open} close={() => close()}/>
        </div>
        <Sidebar open={open} close={() => setOpen(false)} setTech={(tech) => setTech(tech)} updateTech={tech => updateTech(tech)} setAll={() => setAll()}/>
      </div>
    </>
  );
}

const StyledApp = InjectSheet(styles)(App)

export default StyledApp;
