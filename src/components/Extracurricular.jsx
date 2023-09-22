import React from 'react';
import styled from 'styled-components';
import ExtracurricularCard from './ExtracurricularCard';
import { extracurricularData } from '../data/extracurricularData';

const Extracurricular = () => {
    return (
        <ExtracurricularContainer id='extracurricular'>
            <h2 className='extracurricular-title'>Extracurricular</h2>
            <div className='extracurricular-cards'>
                {
                    extracurricularData.map(extracurricular => {
                        return (
                            <ExtracurricularCard 
                                key={extracurricular.id} 
                                title={extracurricular.title} 
                                image={extracurricular.image} 
                                platform={extracurricular.platform}
                                date={extracurricular.date} 
                                certificate_link={extracurricular.certificate_link} />
                        )
                    })
                }
            </div>
        </ExtracurricularContainer>
    );
}

const ExtracurricularContainer = styled.div`
    margin-top: -4rem;
    padding: 8rem 2rem 0 2rem;
    color: #E0FEE0;

    .extracurricular-title {
        margin-top: 0;
        font-size: 1.8rem;
    }

    .extracurricular-cards {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
`

export default Extracurricular;
