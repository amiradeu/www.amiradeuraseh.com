import React from 'react'
import styled from 'styled-components'

import { WORKS } from '../../data'
import WorkCard from '../WorkCard'

function WorkGrid() {
    return (
        <Wrapper>
            {WORKS.map((work, index) => (
                <WorkCard key={index} {...work} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default WorkGrid
