import React from 'react'
import Balancer from 'react-wrap-balancer'
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
            <Balancer>
                <Description>{description}</Description>
            </Balancer>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Title = styled.h3``

const Link = styled.a``

const Author = styled.h4``

const Year = styled.h4``

const CertLink = styled.a``

const Description = styled.p``

export default CertsCard
