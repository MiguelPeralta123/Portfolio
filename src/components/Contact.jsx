import React from 'react';
import styled from 'styled-components';
import { Email, WhatsApp, LocationOn } from '@mui/icons-material'

const Contact = () => {
    return (
        <ContactContainer id='contact'>
            <h2 className='contact-title'>Contact</h2>
            <div className='contact-labels-and-form'>
                <ul className='contact-labels'>
                    <li className='contact-label'>
                        <Email fontSize='small' />
                        <p className='contact-label-text'>l18330484@hermosillo.tecnm.mx</p>
                    </li>
                    <li className='contact-label'>
                        <WhatsApp fontSize='small' />
                        <p className='contact-label-text'>6624042391</p>
                    </li>
                    <li className='contact-label'>
                        <LocationOn fontSize='small' />
                        <p className='contact-label-text'>Hermosillo, Son.</p>
                    </li>
                </ul>
                
                <form className='contact-form'>
                    <label htmlFor='contact-email' className='contact-label'>Email</label>
                    <input id='contact-email' className='contact-email' type='email' 
                        placeholder='type your email' />

                    <label htmlFor='contact-message' className='contact-label'>Message</label>
                    <textarea id='contact-message' className='contact-message' 
                        placeholder='type a message' />

                    <button 
                        className='contact-send' 
                        type='button' onClick={() => {
                        window.alert("Backend not hosted yet")
                    }}>
                        Send
                    </button>
                </form>
            </div>
        </ContactContainer>
    );
}

const ContactContainer = styled.div`
    margin-top: -4rem;
    padding: 8rem 2rem 4rem 2rem;
    color: #E0FEE0;

    .contact-title {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }

    .contact-labels-and-form {
        display: flex;
        align-items: center;
        gap: 2rem;

        @media screen and (max-width: 640px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
        }

        .contact-labels {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            padding: 0;
            list-style-type: none;

            .contact-label {
                display: flex;
                align-items: center;
                gap: 0.5rem;

                .contact-label-text {
                    margin: 0;
                }
            }
        }

        .contact-form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.2rem;

            .contact-label {
                display: block;
                margin-top: 0.5rem;
                font-size: 1rem;
            }

            .contact-email {
                max-width: 100%;
                height: 1.5rem;
                padding: 0 0.5rem;
                font-size: 0.8rem;
                border: 2px solid #E0FEE0;
                border-radius: 0.5rem;
                outline: none;
            }

            .contact-message {
                max-width: 100%;
                height: 5rem;
                padding: 0.5rem;
                font-size: 0.8rem;
                border: 2px solid #E0FEE0;
                border-radius: 1rem;
                outline: none;
                resize: none;

                @media screen and (max-width: 480px) {
                    height: 8rem;
                }
            }

            .contact-send {
                width: 8rem;
                margin-top: 1rem;
                padding: 0.8rem;
                font-size: 1rem;
                font-weight: bold;
                background-color: rgba(0, 128, 128, 0.4);
                color: #E0FEE0;
                border: none;
                border-radius: 1rem;
                transition: 0.2s ease-in-out;

                &:hover {
                    scale: 1.05;
                    background-color: #008080;
                }
            }
        }
    }
`

export default Contact;
