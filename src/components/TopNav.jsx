import React from 'react';
import styled from 'styled-components';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap');
</style>

const TopNav = () => {
    return (
        <TopNavContainer>
            <h3 className='topnav-title'>My Portfolio</h3>
            <ul className='topnav-links'>
                <li className='topnav-link'>About Me</li>
                <li className='topnav-link'>Projects</li>
                <li className='topnav-link'>Certificates</li>
                <li className='topnav-link'>Contact</li>
            </ul>
        </TopNavContainer>
    );
}

const TopNavContainer = styled.div`
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;
    font-family: 'Montserrat', sans-serif;
    background-color: #008080;
    color: white;

    .topnav-title {
        margin: 0;
        font-size: 1.5rem;
    }

    .topnav-links {
        display: flex;
        gap: 1.5rem;
        margin: 0;
        list-style-type: none;

        .topnav-link {
            cursor: pointer;
        }
        
        .topnav-link:hover {
            scale: 1.1;
        }
    }
`

export default TopNav;
