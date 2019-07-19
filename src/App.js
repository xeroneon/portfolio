import React, {useState} from 'react';

import Nav from './Components/Nav'
import logo from './logo.svg';
import './App.scss';
import Portfolio from './Components/Portfolio';
import Button from './Components/Button'

import InjectSheet from 'react-jss';

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr"
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
  },
  tech: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    '& img': {
      width: "40%",
      margin: "20px 10px 20px 10px",
      justifySelf: "center",
      alignSelf: "center",

      '&:hover': {
        cursor: "pointer"
      }
    }
  }
}


const App = props => {

  const { classes } = props
  const [tech, setTech ] = useState("")

  const setAll = () => {
    setTech("");
    console.log(tech)
  }

  return (
    <>
    <Nav />
    <div className={classes.container}>
      <div style={{background: "#262626", borderRadius: "0 70px 0 0"}}>
        <Portfolio selTech={tech} />
      </div>
      <div>
        <div className={classes.links}>
          <Button name="Github" href="#" />
          <Button name="LinkedIn" href="#" />

        </div>
        <div className={classes.all}>
          <Button onClick={() => setAll()} name="All" target />
        </div>
        <div className={classes.tech}>
          <img onClick={() => setTech("mongo")} src="/images/mongo.png" />
          <img onClick={() => setTech("mysql")}src="/images/mysql.png" />
          <img onClick={() => setTech("react")}src="/images/react.png" />
          <img onClick={() => setTech("firebase")}src="/images/firebase.png" />
          <img onClick={() => setTech("node")}src="/images/node.png" />
          <img onClick={() => setTech("js")}src="/images/js.png" />
          <img onClick={() => setTech("express")}src="/images/express.png" />
          <img onClick={() => setTech("handlebars")}src="/images/handlebars.png" />
          <img onClick={() => setTech("html")}src="/images/html.png" />
          <img onClick={() => setTech("css")}src="/images/css.png" />
          <img onClick={() => setTech("wordpress")}src="/images/wordpress.png" />




        </div>
      </div>
      </div>
    </>
  );
}

const StyledApp = InjectSheet(styles)(App)

export default StyledApp;
