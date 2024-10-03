import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Wrapper>
            <div>HOME</div>
            <a href='/resume'>See Resume</a>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    place-content: center;
    height: 100%;
`
export default Home
