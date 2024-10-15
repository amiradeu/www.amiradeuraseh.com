import React from 'react'
import styled from 'styled-components'
import Balancer from 'react-wrap-balancer'

import { SUMMARY } from '../../data'

function Summary() {
    const intro = SUMMARY.main.split('Frontend Developer')

    return (
        <Wrapper>
            <Balancer>
                <Main>
                    {intro[0]}
                    <em>Frontend Developer</em>
                    {intro[1]}
                </Main>
            </Balancer>
            <Balancer>
                <Sub>{SUMMARY.sub}</Sub>
            </Balancer>
        </Wrapper>
    )
}

const Wrapper = styled.div``
const Main = styled.h1`
    margin-top: 2em;
    margin-bottom: 1em;

    font-size: clamp(1.5rem, 4vw + 1rem, 3.8rem);
`
const Sub = styled.h2`
    margin-bottom: 1em;
    font-size: clamp(1rem, 4vw + 1rem, 1.8rem);
`

export default Summary
