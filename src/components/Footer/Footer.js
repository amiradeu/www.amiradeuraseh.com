import React from 'react'
import styled from 'styled-components'
import Contact from '../Contact'

function Footer() {
    return (
        <Wrapper>
            <Contact></Contact>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    padding-block: 1em;
    border-top: 1px solid var(--color-primary);
    background-color: var(--color-white);
`

export default Footer
