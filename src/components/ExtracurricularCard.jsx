import React from 'react';
import styled from 'styled-components';
import { Link } from '@mui/icons-material';

const ExtracurricularCard = (props) => {

    return (
        <ExtracurricularCardContainer>
            <img className='extracurricular-card-image' src={props.image} alt={props.title} />

            <div className='extracurricular-card-details'>
                <h4 className='extracurricular-card-title'>{props.title}</h4>

                <div className='extracurricular-card-platform-and-duration'>
                    <p className='extracurricular-card-platform'>{props.platform}</p>
                    <p className='extracurricular-card-duration'>{props.duration}</p>
                </div>

                <p className='extracurricular-card-date'>{props.date}</p>

                <div className='extracurricular-card-link'>
                    <Link fontSize="small" />
                    <a className='extracurricular-card-link-url'
                        href={props.certificate_link}
                        target='blank'>
                        See Certificate
                    </a>
                </div>
            </div>

        </ExtracurricularCardContainer>
    );
}

const ExtracurricularCardContainer = styled.div`
    display: flex;
    align-items: center;
    min-width: 9rem;
    border: 2px solid #E0FEE0;
    border-radius: 1rem;
    background-color: rgba(0, 128, 128, 0.4);
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: rgb(0, 128, 128);
        scale: 1.02;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
    }

    .extracurricular-card-image {
        width: 15rem;
        max-height: 10rem;
        object-fit: cover;
        border-radius: 1rem 0 0 1rem;
        transition: 0.3s ease-in-out;

        @media screen and (max-width: 480px) {
            width: 100%;
            object-fit: cover;
            border-radius: 1rem 1rem 0 0;
        }
    }

    .extracurricular-card-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        font-size: 0.8rem;

        .extracurricular-card-title {
            margin: 0;
            font-size: 1.2rem;
        }

        .extracurricular-card-platform-and-duration {
            display: flex;
            align-items: center;
            gap: 1rem;

            .extracurricular-card-platform {
                margin: 0;
                font-weight: bold;
            }

            .extracurricular-card-duration {
                margin: 0;
            }
        }

        .extracurricular-card-date {
            margin: 0;
            font-style: italic;
        }

        .extracurricular-card-link {
            display: flex;
            align-items: center;
            gap: 0.2rem;

            .extracurricular-card-link-url {
                text-decoration: none;
                color: #E0FEE0;
                cursor: pointer;
            }
        }
    }
`

export default ExtracurricularCard;
