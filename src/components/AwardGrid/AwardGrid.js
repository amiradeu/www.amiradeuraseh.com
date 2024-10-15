import styled from 'styled-components'

import { AWARDS } from '../../data'
import AwardCard from '../AwardCard'

function AwardGrid() {
    return (
        <Wrapper>
            {AWARDS.map((award, index) => (
                <AwardCard {...award} key={index} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div``

export default AwardGrid
