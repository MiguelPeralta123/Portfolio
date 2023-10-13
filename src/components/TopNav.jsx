import React from 'react';
import styled from 'styled-components';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap');
</style>

const TopNav = (props) => {
    return (
        <TopNavContainer>
            <nav className={props.isScrolled ? 'scrolled' : 'not-scrolled'}>
                <h3 className='topnav-title'>My Portfolio</h3>
                <ul className='topnav-links'>
                    <a className='topnav-link' href='#about-me'>About Me</a>
                    <a className='topnav-link' href='#projects'>Projects</a>
                    <a className='topnav-link' href='#certificates'>Certificates</a>
                    <a className='topnav-link' href='#extracurricular'>Extracurricular</a>
                    <a className='topnav-link' href='#technologies'>Technologies</a>
                    {/*<a className='topnav-link' href='#contact'>Contact</a>*/}
                </ul>
            </nav>
        </TopNavContainer>
    );
}

const TopNavContainer = styled.div`

    .scrolled {
        background-color: rgba(0, 128, 128, 0.8);
    }

    .not-scrolled {
        background-color: rgb(0, 128, 128);
    }

    nav {
        position: fixed;
        top: 0;
        right: 0;
        width: 100vw;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: 'Montserrat', sans-serif;
        color: #E0FEE0;
        border-bottom: 2px solid white;
        transition: 0.2s ease-in-out;
        z-index: 101;

        @media screen and (max-width: 768px) {
            gap: 1rem;
        }

        .topnav-title {
            margin-left: 5rem;
            font-size: 1.5rem;
            transition: 0.2s ease-in-out;

            @media screen and (max-width: 900px) {
                margin-left: 2rem;
            }
        }

        .topnav-links {
            display: flex;
            gap: 1.2rem;
            margin-right: 5rem;
            list-style-type: none;
            transition: 0.2s ease-in-out;

            @media screen and (max-width: 900px) {
                margin-right: 2rem;
                gap: 1rem;
            }

            @media screen and (max-width: 768px) {
                display: none;
            }

            .topnav-link {
                font-size: 0.9rem;
                color: #E0FEE0;
                text-decoration: none;
                cursor: pointer;
                transition: 0.1s ease-in-out;

                &:hover {
                    scale: 1.1;
                }
            }
        }
    }
`

export default TopNav;
