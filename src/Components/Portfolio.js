import React from 'react';
import PortfolioItem from './PortfolioItem'
import projects from "../projects";

import InjectSheet from 'react-jss';

const styles = {
    container: {
        display: "grid",
        gridTemplateColumns: "1fr", 
        gridGap: "30px",
        padding: "60px",
        filter: props => props.open ? "blur(20px)" : "none"
    },

    '@media (max-width: 1350px)': {
        container: {
            gridTemplateColumns: "1fr 1fr !important",
            padding: "30px"
        }
    },

    '@media (max-width: 700px)': {
        container: {
            gridTemplateColumns: "1fr !important"
        }
    }
}

const Portfolio = props => {

    const { classes } = props;

    return(
        <>
        <div className={classes.container} onClick={() => props.close()}>

        {projects.map(project => {
            if (!project.tech.includes(props.selTech) && props.selTech !== "") {
                return null
            }
            return <PortfolioItem title={project.title} summary={project.summary} image={project.image} link={project.link} repo={project.repo} tech={project.tech} gradient={project.gradient} key={project.title}/>
        })}

            
        </div>
        </>
    )
}

const StyledPortfolio = InjectSheet(styles)(Portfolio)

export default StyledPortfolio;