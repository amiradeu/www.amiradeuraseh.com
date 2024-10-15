import React from 'react'
import styled from 'styled-components'

import RagingSea from '../../experiences/RagingSea'

function Home() {
    return (
        <>
            <Wrapper>
                <RagingSea />
            </Wrapper>
            <LinkWrapper>
                <Link href='/resume'>See Resume</Link>
            </LinkWrapper>
        </>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

const LinkWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: grid;
    place-content: center;
    height: 100%;
    width: 100%;
`

const Link = styled.a`
    padding: 1em;
    border: 1px solid;
    border-radius: 50%;
    color: var(--color-white);

    &:hover {
        color: var(--color-secondary);
    }
`
export default Home
