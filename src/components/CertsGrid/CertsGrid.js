import React from 'react'
import styled from 'styled-components'

import { CERTIFICATIONS } from '../../data'
import CertCard from '../CertsCard/CertsCard'

function CertsGrid() {
    return (
        <Wrapper>
            {CERTIFICATIONS.map((cert, index) => (
                <CertWrapper key={index}>
                    <CertCard {...cert} />
                </CertWrapper>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div``

const CertWrapper = styled.div``

export default CertsGrid
