import React, { useState } from 'react';
import styled from 'styled-components';

import BackgroundImage from './BackgroundImage';
import TopNav from './TopNav';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Certificates from './Certificates';
import Extracurricular from './Extracurricular';
import Technologies from './Technologies';
//import Contact from './Contact';

const Portfolio = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    return (
        <PortfolioContainer>
            <BackgroundImage />
            <div className='portfolio-container'>
                <TopNav isScrolled={isScrolled} />
                <div className='portfolio-content'>
                    <AboutMe />
                    <Projects />
                    <Certificates />
                    <Extracurricular />
                    <Technologies />
                    {/*<Contact />*/}
                </div>
            </div>
        </PortfolioContainer>
    );
}

const PortfolioContainer = styled.div`
    position: relative;

    .portfolio-container {
        width: 100vw;
        height: 10vh;
        position: absolute;
        top: 0;
    }

    .portfolio-content {
        max-width: 55rem;
        margin: 0 auto;
    }
`

export default Portfolio;
