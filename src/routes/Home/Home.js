import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Wrapper>
            <Link href='/resume'>See Resume</Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    place-content: center;
    height: 100%;
`

const Link = styled.a`
    padding: 1em;
    border: 1px solid;
    border-radius: 50%;
    color: var(--color-primary);

    &:hover {
        color: var(--color-offblack);
    }
`
export default Home
