import React from 'react'
import Balancer from 'react-wrap-balancer'
import styled from 'styled-components'
import { QUERIES } from '../../constants'

function CertsCard({ title, courseLink, author, year, certLink, description }) {
    return (
        <Wrapper>
            <Header>
                <MainHeader>
                    <Title>{title}</Title>
                    <SubTitle>by {author}</SubTitle>
                </MainHeader>
                <SubHeader>{year}</SubHeader>
            </Header>

            <Balancer>
                <Content>{description}</Content>
            </Balancer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 2em;

    padding-block-end: 2em;

    @media ${QUERIES.tabletAndDown} {
        display: flex;
        flex-direction: column;
        gap: 0;
    }
`
const Header = styled.div``
const Title = styled.h3``
const SubTitle = styled.h3`
    font-style: italic;
`

const MainHeader = styled.div``
const SubHeader = styled.h4`
    padding-block: 1em;
`

const Content = styled.p`
    padding-inline-end: 4em;

    @media ${QUERIES.tabletAndDown} {
        padding: 0;
    }
`

const CertLink = styled.a``

export default CertsCard
