import React from 'react'
import styled from 'styled-components'

import { LANGUAGES } from '../../data'
import LanguageCard from '../LanguageCard'

function LanguageGrid() {
    return (
        <Wrapper>
            {LANGUAGES.map((lang, index) => (
                <LanguageWrapper key={index}>
                    <LanguageCard {...lang} />
                </LanguageWrapper>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div``

const LanguageWrapper = styled.div``

export default LanguageGrid
