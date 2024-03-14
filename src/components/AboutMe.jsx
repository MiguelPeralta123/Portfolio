import React from 'react';
import styled from 'styled-components';
import { GitHub, LinkedIn } from '@mui/icons-material'

const AboutMe = () => {
    return (
        <AboutMeContainer id='about-me'>
            <div className='about-me-content'>
                <img className='about-me-image' src='images/miguel.webp' alt='Miguel Peralta' />
                <div className='about-me-detail'>
                    <h4 className='about-me-name'>Jesús Miguel Peralta Olivarría</h4>
                    <div className='about-me-description'>
                        <p>Independent and self-motivated professional looking for a position in the software engineering department. Passionate in my career and willing to learn everyday.</p>
                        <p>I specialize in web development.</p>
                    </div>
                    <div className='cv-and-contact'>
                        <a className='button-download-cv'
                            href='documents/CV Jesús Miguel Peralta Olivarría.pdf' 
                            download='CV Jesús Miguel Peralta Olivarría.pdf'>
                            Download My CV
                        </a>
                        <a className='social-media-icon' 
                            href='https://github.com/MiguelPeralta123' 
                            target='blank'>
                            <GitHub fontSize='large' />
                        </a>
                        <a 
                            className='social-media-icon' 
                            href='https://www.linkedin.com/in/miguel-peralta248/'
                            target='blank'>
                            <LinkedIn fontSize='large' />
                        </a>
                    </div>
                </div>
            </div>
        </AboutMeContainer>
    );
}

const AboutMeContainer = styled.div`
    padding: 12rem 2rem 0 2rem;
    color: #E0FEE0;

    .about-me-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3rem;
        
        .about-me-image {
            width: 15rem;
            border-radius: 50%;
        }

        .about-me-detail {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;

            .about-me-name {
                margin: 0;
                font-size: 1.5rem;
            }

            .cv-and-contact {
                display: flex;
                align-items: center;
                gap: 1.5rem;

                .button-download-cv {
                    padding: 1rem;
                    text-decoration: none;
                    font-weight: bold;
                    background-color: rgba(0, 128, 128, 0.4);
                    color: #E0FEE0;
                    border-radius: 1rem;
                    transition: 0.2s ease-in-out;

                    &:hover {
                        scale: 1.05;
                        background-color: #008080;
                    }
                }

                .social-media-icon {
                    color: #E0FEE0;
                    transition: 0.2s ease-in-out;

                    &:hover {
                        scale: 1.05;
                    }
                }
            }
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }
`

export default AboutMe;
