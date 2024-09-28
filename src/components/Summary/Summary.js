import React from 'react'
import styled from 'styled-components'

function Summary() {
    return (
        <Wrapper>
            <About>
                Amira is a creative frontend developer with over 5 years of
                diverse experience in web development, programming education and
                creative media. She specialises in building interactive web
                experience using modern JavaScript frameworks and 3D WebGL,
                transforming innovative ideas to life in the digital space.
            </About>
            <About>
                Beyond development, Amira is also a dedicated programming tutor
                and passionate visual storyteller, making her a well-rounded
                professional with a love for design, art and collaboration.
            </About>
        </Wrapper>
    )
}

const Wrapper = styled.div``
const About = styled.p``
export default Summary
