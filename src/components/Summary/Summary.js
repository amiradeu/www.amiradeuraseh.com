import React from 'react'
import styled from 'styled-components'
import Balancer from 'react-wrap-balancer'

import { SUMMARY } from '../../data'

function Summary() {
    return (
        <Wrapper>
            <Balancer>
                <Main>{SUMMARY.main}</Main>
            </Balancer>
            <Balancer>
                <Sub>{SUMMARY.sub}</Sub>
            </Balancer>
        </Wrapper>
    )
}

const Wrapper = styled.div``
const Main = styled.h1``
const Sub = styled.h3``
export default Summary
