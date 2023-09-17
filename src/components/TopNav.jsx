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
                    <li className='topnav-link'>About Me</li>
                    <li className='topnav-link'>Projects</li>
                    <li className='topnav-link'>Certificates</li>
                    <li className='topnav-link'>Contact</li>
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
        color: white;
        border-bottom: 2px solid white;
        transition: 0.2s ease-in-out;
        z-index: 101;

        .topnav-title {
            margin-left: 5rem;
            font-size: 1.5rem;
            transition: 0.2s ease-in-out;

            @media screen and (max-width: 768px) {
                margin-left: 2rem;
            }
        }

        .topnav-links {
            display: flex;
            gap: 1.5rem;
            margin-right: 5rem;
            list-style-type: none;
            transition: 0.2s ease-in-out;

            .topnav-link {
                cursor: pointer;
                transition: 0.1s ease-in-out;

                &:hover {
                    scale: 1.1;
                }
            }

            @media screen and (max-width: 768px) {
                margin-right: 2rem;
            }
        }
    }
`

export default TopNav;
