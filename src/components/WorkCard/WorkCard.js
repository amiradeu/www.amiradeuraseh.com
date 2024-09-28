import React from 'react'
import styled from 'styled-components'

function WorkCard({ title, company, year, description }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Company>{company}</Company>
            <Year>{year}</Year>
            <Description>{description}</Description>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Title = styled.h3``

const Company = styled.div``

const Year = styled.div``

const Description = styled.p``

export default WorkCard
