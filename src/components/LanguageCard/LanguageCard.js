import React from 'react'
import styled from 'styled-components'
import { QUERIES } from '../../constants'

function LanguageCard({ title, level, certLink }) {
    return (
        <Wrapper>
            <Language>{title}</Language>
            <Level>{level}</Level>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Language = styled.h3``
const Level = styled.h4``

const LevelWrapper = styled.div``
const Link = styled.a``

export default LanguageCard
