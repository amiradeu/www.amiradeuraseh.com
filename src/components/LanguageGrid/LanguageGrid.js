import React from 'react'
import styled from 'styled-components'

import { LANGUAGES } from '../../data'
import LanguageCard from '../LanguageCard'
import { QUERIES } from '../../constants'

function LanguageGrid() {
    return (
        <Wrapper>
            {LANGUAGES.map((lang, index) => (
                <LanguageCard key={index} {...lang} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 2em;

    @media ${QUERIES.tabletAndDown} {
        flex-direction: column;
        gap: 0.4em;
    }
`

export default LanguageGrid
