import React from 'react';
import styled from 'styled-components';
import CertificateCard from './CertificateCard';
import { certificatesData } from '../data/certificatesData';

const Certificates = () => {
    return (
        <CertificatesContainer id='certificates'>
            <h2 className='certificates-title'>Certificates</h2>
            <div className='certificates-cards'>
                {
                    certificatesData.map(certificate => {
                        return (
                            <CertificateCard 
                                key={certificate.id} 
                                title={certificate.title} 
                                image={certificate.image} 
                                platform={certificate.platform}
                                duration={certificate.duration} 
                                date={certificate.date} 
                                credential_link={certificate.credential_link} />
                        )
                    })
                }
            </div>
        </CertificatesContainer>
    );
}

const CertificatesContainer = styled.div`
    margin-top: -4rem;
    padding: 8rem 2rem 0 2rem;
    color: #E0FEE0;

    .certificates-title {
        margin-top: 0;
        font-size: 1.8rem;
    }

    .certificates-cards {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`

export default Certificates;
