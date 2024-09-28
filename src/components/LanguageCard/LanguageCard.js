import React from 'react'
import styled from 'styled-components'

function LanguageCard({ title, level, certLink }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            {certLink ? (
                <Link href={certLink}>
                    <Level>{level}</Level>
                </Link>
            ) : (
                <Level>{level}</Level>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div``
const Title = styled.h4``
const Level = styled.p``
const Link = styled.a``

export default LanguageCard
