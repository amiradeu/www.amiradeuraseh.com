import React from 'react'
import styled from 'styled-components'

function CertsCard({ title, courseLink, author, year, certLink, description }) {
    return (
        <Wrapper>
            <Link href={courseLink}>
                <Title>{title}</Title>
            </Link>
            <Author>{author}</Author>
            <CertLink href={certLink}>
                <Year>{year}</Year>
            </CertLink>
            <Description>{description}</Description>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Title = styled.h3``

const Link = styled.a``

const Author = styled.div``

const Year = styled.div``

const CertLink = styled.a``

const Description = styled.p``

export default CertsCard
