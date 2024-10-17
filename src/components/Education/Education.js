import React from 'react'
import styled from 'styled-components'

import { EDUCATION } from '../../data'

function Education() {
    return (
        <Wrapper>
            <Institution>{EDUCATION.institute}</Institution>
            <Bachelor>{EDUCATION.bachelor}</Bachelor>
            <Year>{EDUCATION.year}</Year>
        </Wrapper>
    )
}

const Wrapper = styled.div``
const Institution = styled.h3``
const Bachelor = styled.h4`
    padding-block: 0.4em;
`
const Year = styled.p``
const Cert = styled.p``

export default Education
