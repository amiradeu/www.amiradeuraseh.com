import React from 'react'
import styled from 'styled-components'

import { CONTACTS } from '../../data'
import { QUERIES } from '../../constants'

function Contact() {
    return (
        <Wrapper>
            <List>
                <Name>{CONTACTS.name}</Name>
                <Email>{CONTACTS.email}</Email>
                <Location>{CONTACTS.location}</Location>
            </List>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const List = styled.ul`
    display: flex;
    justify-content: space-around;

    @media ${QUERIES.tabletAndDown} {
        display: grid;
        grid-template-areas:
            'name email'
            'name location';
    }
`
const Name = styled.li`
    grid-area: name;
`

const Email = styled.li`
    grid-area: email;
`

const Location = styled.li`
    grid-area: location;
`

export default Contact
