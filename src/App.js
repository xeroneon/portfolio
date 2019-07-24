import React, { useState } from 'react';

import Nav from './Components/Nav'
import logo from './logo.svg';
import './App.scss';
import Portfolio from './Components/Portfolio';
import Button from './Components/Button'

import InjectSheet from 'react-jss';

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
  }
}


const App = props => {

  const { classes } = props
  const [tech, setTech] = useState("")

  const setAll = () => {
    setTech("");
    console.log(tech)
  }

  return (
    <>
      <Nav />
      <div className={classes.container}>
        <div style={{ background: "#424242", borderRadius: "0 30px 0 0" }}>
          <Portfolio selTech={tech} />
        </div>
        <div>
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
      </div>
    </>
  );
}

const StyledApp = InjectSheet(styles)(App)

export default StyledApp;
