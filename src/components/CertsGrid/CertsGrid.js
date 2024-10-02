import React from 'react'
import styled from 'styled-components'

import { CERTIFICATIONS } from '../../data'
import CertCard from '../CertsCard/CertsCard'

function CertsGrid() {
    return (
        <Wrapper>
            {CERTIFICATIONS.map((cert, index) => (
                <CertCard {...cert} key={index} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default CertsGrid
