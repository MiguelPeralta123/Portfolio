import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
    return (
        <AboutMeContainer id='about-me'>
            <div className='about-me-content'>
                <img className='about-me-image' src='images/miguel.png' alt='Miguel Peralta' />
                <div className='about-me-detail'>
                    <h4 className='about-me-name'>Jesús Miguel Peralta Olivarría</h4>
                    <div className='about-me-description'>
                        <p>Independent and self-motivated student looking for a position in the software engineering department. Passionate in my career and willing to learn everyday.</p>
                        <p>I specialize in frontend development.</p>
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
            gap: 1rem;

            .about-me-name {
                margin: 0;
                font-size: 1.5rem;
            }
        }

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }
`

export default AboutMe;
