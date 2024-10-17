import React from 'react'
import styled from 'styled-components'

import Link from '../Link'

function LanguageCard({ title, level, certLink }) {
    return (
        <Wrapper>
            <Language>{title}</Language>
            <Level>
                <Link href={certLink}>{level}</Link>
            </Level>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const Language = styled.h3``
const Level = styled.h4``

export default LanguageCard
