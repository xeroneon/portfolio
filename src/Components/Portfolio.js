import React from 'react';
import Flex from './Flex/Flex'
import FlexItem from './Flex/FlexItem'
import PortfolioItem from './PortfolioItem'
import projects from "../projects";

const Portfolio = props => {
    return(
        <>
        <div style={{padding: "60px"}}>

        {projects.map(project => {
            if (!project.tech.includes(props.selTech) && props.selTech != "") {
                return null
            }
            return <PortfolioItem title={project.title} summary={project.summary} image={project.image} link={project.link} repo={project.repo} tech={project.tech} gradient={project.gradient} key={project.title}/>
        })}

            
        </div>
        </>
    )
}

export default Portfolio;