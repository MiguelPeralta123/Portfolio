import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactContainer id='contact'>
            <h2 className='contact-title'>Contact</h2>
            <form className='contact-email-form'>
                <label htmlFor='contact-email-input' className='contact-email-label'>Message</label>
                <textarea id='contact-email-input' className='contact-email-input' 
                    placeholder='Please type a message and your contact info' />
                <button className='contact-email-button' type='button'>Send</button>
            </form>
        </ContactContainer>
    );
}

const ContactContainer = styled.div`
    margin: -4rem 0 4rem 0;
    padding: 8rem 2rem 0 2rem;
    color: #E0FEE0;

    .contact-title {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }

    .contact-email-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .contact-email-label {
            display: block;
            font-size: 1.1rem;
        }

        .contact-email-input {
            max-width: 100%;
            height: 5rem;
            padding: 0.5rem;
            font-size: 1rem;
            border: 2px solid #E0FEE0;
            border-radius: 1rem;
            outline: none;
            resize: none;

            @media screen and (max-width: 480px) {
                height: 8rem;
            }
        }

        .contact-email-button {
            width: 8rem;
            padding: 0.8rem;
            font-size: 1rem;
            font-weight: bold;
            background-color: #008080;
            color: #E0FEE0;
            border: none;
            border-radius: 1rem;
            transition: 0.2s ease-in-out;

            &:hover {
                scale: 1.05;
            }
        }
    }
`

export default Contact;
