import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    return (
        <ProjectsContainer>
            <h2 className='projects-title'>Projects</h2>
            <div className='projects-cards'>
                {
                    projectsData.map(project => {
                        return (
                            <ProjectCard 
                                key={project.id} 
                                title={project.title} 
                                image={project.image} 
                                description={project.description}
                                website_link={project.website_link} 
                                github_link={project.github_link} 
                                technologies={project.technologies} />
                        )
                    })
                }
            </div>
        </ProjectsContainer>
    );
}

const ProjectsContainer = styled.div`
    padding: 2rem;
    color: #E0FEE0;

    .projects-title {
        margin-top: 0;
        font-size: 1.8rem;
    }

    .projects-cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;

        @media screen and (max-width: 480px) {
            grid-template-columns: 1fr;
        }
    }
`

export default Projects;
