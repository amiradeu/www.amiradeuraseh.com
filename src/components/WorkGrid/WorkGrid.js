import React from 'react'
import styled from 'styled-components'

import { WORKS } from '../../data'
import WorkCard from '../WorkCard'

function WorkGrid() {
    return (
        <Wrapper>
            {WORKS.map((work, index) => (
                <WorkWrapper key={index}>
                    <WorkCard {...work} />
                </WorkWrapper>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div``

const WorkWrapper = styled.div``

export default WorkGrid
