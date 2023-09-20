import React from 'react';
import styled from 'styled-components';
import { Link } from '@mui/icons-material';

const CertificateCard = (props) => {

    return (
        <CertificateCardContainer>
            <img className='certificate-card-image' src={props.image} alt={props.title} />

            <div className='certificate-card-details'>
                <h4 className='certificate-card-title'>{props.title}</h4>

                <div className='certificate-card-platform-and-duration'>
                    <p className='certificate-card-platform'>{props.platform}</p>
                    <p className='certificate-card-duration'>{props.duration}</p>
                </div>

                <p className='certificate-card-date'>{props.date}</p>

                <div className='certificate-card-link'>
                    <Link fontSize="small" />
                    <a className='certificate-card-link-url'
                        href={props.credential_link}
                        target='blank'>
                        See Credential
                    </a>
                </div>
            </div>

        </CertificateCardContainer>
    );
}

const CertificateCardContainer = styled.div`
    display: flex;
    align-items: center;
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

    .certificate-card-image {
        max-width: 20rem;
        max-height: 10rem;
        object-fit: contain;
        border-radius: 1rem 0 0 1rem;
        transition: 0.3s ease-in-out;

        @media screen and (max-width: 480px) {
            max-width: fit-content;
            width: 100%;
            object-fit: cover;
            border-radius: 1rem 1rem 0 0;
        }
    }

    .certificate-card-details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        font-size: 0.8rem;

        .certificate-card-title {
            margin: 0;
            font-size: 1.2rem;
        }

        .certificate-card-platform-and-duration {
            display: flex;
            align-items: center;
            gap: 1rem;

            .certificate-card-platform {
                margin: 0;
                font-weight: bold;
            }

            .certificate-card-duration {
                margin: 0;
            }
        }

        .certificate-card-date {
            margin: 0;
            font-style: italic;
        }

        .certificate-card-link {
            display: flex;
            align-items: center;
            gap: 0.2rem;

            .certificate-card-link-url {
                text-decoration: none;
                color: #E0FEE0;
                cursor: pointer;
            }
        }
    }
`

export default CertificateCard;
