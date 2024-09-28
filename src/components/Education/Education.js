import React from 'react'
import styled from 'styled-components'

function Education() {
    return (
        <Wrapper>
            <Title>
                Bachelor’s Degree in Computer & Communication Systems
                Engineering
            </Title>
            <Institution>Universiti Putra Malaysia (UPM), Serdang</Institution>
            <Year>2019</Year>
            <Cert>Second-Class Upper Honours, CGPA 3.696</Cert>
        </Wrapper>
    )
}

const Wrapper = styled.div``
const Title = styled.h3``
const Institution = styled.h4``
const Year = styled.p``
const Cert = styled.p``

export default Education
