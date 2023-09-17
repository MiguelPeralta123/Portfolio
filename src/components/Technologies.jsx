import React from 'react';
import styled from 'styled-components';

const Technologies = () => {
    return (
        <TechnologiesContainer id='technologies'>
            <h2 className='technologies-title'>Technologies</h2>
            <ul className='technologies'>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/html.png' alt='HTML' />
                    <p className='technology-name'>HTML</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/css.png' alt='CSS' />
                    <p className='technology-name'>CSS</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/javascript.png' alt='Javascript' />
                    <p className='technology-name'>Javascript</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/react.png' alt='React' />
                    <p className='technology-name'>React</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/c-sharp.png' alt='C#' />
                    <p className='technology-name'>C#</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/java.png' alt='Java' />
                    <p className='technology-name'>Java</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/python.png' alt='Python' />
                    <p className='technology-name'>Python</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/django.png' alt='Django' />
                    <p className='technology-name'>Django</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/kotlin.png' alt='Kotlin' />
                    <p className='technology-name'>Kotlin</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/node.png' alt='Node' />
                    <p className='technology-name'>Node</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/express.png' alt='Express' />
                    <p className='technology-name'>Express</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/docker.png' alt='Docker' />
                    <p className='technology-name'>Docker</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/sql-server.png' alt='SQLServer' />
                    <p className='technology-name'>SQLServer</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/my-sql.png' alt='MySQL' />
                    <p className='technology-name'>MySQL</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/firebase.png' alt='Firebase' />
                    <p className='technology-name'>Firebase</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/git.png' alt='Git' />
                    <p className='technology-name'>Git</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/bootstrap.png' alt='Bootstrap' />
                    <p className='technology-name'>Bootstrap</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/tailwind.png' alt='Tailwind' />
                    <p className='technology-name'>Tailwind</p>
                </li>
                <li className='technology'>
                    <img className='technology-image' src='images/technologies/postman.png' alt='Postman' />
                    <p className='technology-name'>Postman</p>
                </li>
            </ul>
        </TechnologiesContainer>
    );
}

const TechnologiesContainer = styled.div`
    margin-top: -4rem;
    padding: 8rem 2rem 0 2rem;
    color: #E0FEE0;

    .technologies-title {
        margin-top: 0;
        font-size: 1.8rem;
    }

    .technologies {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 1.5rem;
        padding: 0;
        list-style-type: none;

        @media screen and (max-width: 768px) {
            grid-template-columns: repeat(6, 1fr);
        }

        @media screen and (max-width: 640px) {
            grid-template-columns: repeat(4, 1fr);
        }

        @media screen and (max-width: 480px) {
            grid-template-columns: repeat(2, 1fr);
        }

        .technology {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            transition: 0.2s ease-in-out;

            &:hover {
                scale: 1.08;
            }

            .technology-image {
                width: 100%;
                height: 4rem;
                object-fit: contain;
            }

            .technology-name {
                margin: 0;
                font-weight: bold;
                text-align: center;
            }
        }
    }
`

export default Technologies;
