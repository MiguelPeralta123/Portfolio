import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, GitHub } from '@mui/icons-material';

const ProjectCard = (props) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <ProjectCardContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>

            <img className='project-card-image' src={props.image} alt={props.title} />
            <h4 className='project-card-title'>{props.title}</h4>

            {
                isHovered && (
                    <div className='project-card-hovered'>
                        <img className='project-card-hovered-image' src={props.image} alt={props.title} />
                        <h4 className='project-card-hovered-title'>{props.title}</h4>
                        <div className='project-card-details'>
                            <p className='project-card-description'>{props.description}</p>

                            <div className='project-card-link'>
                                <Link fontSize="small" />
                                {
                                    props.website_link ?
                                    (<a className='project-card-link-url' 
                                        href={props.website_link}
                                        target='blank'
                                    >
                                        Visit Website
                                    </a>)
                                    :
                                    (<p style={{ margin: 0 }}>Not hosted yet</p>)
                                }
                            </div>

                            <div className='project-card-link'>
                                <GitHub fontSize="small" />
                                <a className='project-card-link-url' 
                                    href={props.github_link}
                                    target='blank'>
                                    Github Repository
                                </a>
                            </div>
                            
                            <ul className='project-card-technologies'>
                                {
                                    props.technologies.map((technology, index) => {
                                        return (
                                            <li key={index} className='project-card-technology'>{technology}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                )
            }

        </ProjectCardContainer>
    );
}

const ProjectCardContainer = styled.div`
    position: relative;
    border: 2px solid #E0FEE0;
    border-radius: 1rem;
    background-color: rgba(0, 128, 128, 0.4);
    transition: 0.2s ease-in-out;

    .project-card-image {
        width: 100%;
        max-height: 10.8rem;
        object-fit: contain;
        border-radius: 1rem 1rem 0 0;
        transition: 0.3s ease-in-out;
    }

    .project-card-title {
        margin: 1rem;
        font-size: 1.2rem;
    }

    .project-card-hovered {
        position: absolute;
        bottom: -15%;
        left: -2%;
        width: 105%;
        height: auto;
        background-color: #008080;
        border: 2px solid #E0FEE0;
        border-radius: 1rem;
        overflow: hidden;
        z-index: 100;

        .project-card-hovered-title {
            margin: 0.5rem 1rem 0 1rem;
            font-size: 1.2rem;
        }

        .project-card-hovered-image {
            width: 100%;
            height: 10.8rem;
            object-fit: cover;
            border-radius: 1rem 1rem 0 0;
            transition: 0.3s ease-in-out;

            &:hover {
                scale: 1.04;
            }
        }

        .project-card-details {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
            margin: 0 1rem;
            font-size: 0.8rem;

            .project-card-description {
                margin: 0.5rem 0;

                @media screen and (max-width: 640px) {
                    display: none;
                }

                @media screen and (max-width: 480px) {
                    display: block;
                }
            }

            .project-card-link {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                .project-card-link-url {
                    text-decoration: none;
                    color: #E0FEE0;

                    &:hover {
                        scale: 1.05;
                    }
                }
            }

            .project-card-technologies {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0.8rem;
                list-style-type: none;
                margin: 0.5rem 0 1rem 0.5rem;
                padding: 0;

                @media screen and (max-width: 768px) {
                    grid-template-columns: repeat(2, 1fr);
                }

                @media screen and (max-width: 640px) {
                    grid-template-columns: 1fr;
                }

                @media screen and (max-width: 480px) {
                    grid-template-columns: repeat(3, 1fr);
                }

                .project-card-technology {
                    font-size: 0.8rem;
                    font-style: italic;
                }
            }
        }
    }
`

export default ProjectCard;
