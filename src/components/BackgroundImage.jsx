import React from 'react';
import styled from 'styled-components'

const BackgroundImage = () => {
    return (
        <BackgroundContainer />
    );
}

const BackgroundContainer = styled.div`
    background-image: url('background.jpg');
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-size: cover;
    background-position: center;
    filter: brightness(15%);
`

export default BackgroundImage;
