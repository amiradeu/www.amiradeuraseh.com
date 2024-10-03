import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <Wrapper>
            <Title href='/'>Resume of Amira Deuraseh</Title>
            <Home href='/'>+</Home>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-block: 2em;
`

const Home = styled.a``
const Title = styled.a``

export default Navbar
