import React from 'react'
import styled from 'styled-components'
import Balancer from 'react-wrap-balancer'
import { QUERIES } from '../../constants'

function WorkCard({ title, company, year, description }) {
    return (
        <Wrapper>
            <Header>
                <MainHeader>
                    <Title>{title}</Title>
                    <SubTitle>{company}</SubTitle>
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

    margin-block-end: 2em;

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

export default WorkCard
