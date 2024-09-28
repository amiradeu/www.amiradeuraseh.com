import styled from 'styled-components'

import WorkGrid from './WorkGrid/WorkGrid'
import CertsGrid from './CertsGrid/CertsGrid'
import LanguageGrid from './LanguageGrid/LanguageGrid'
import Education from './Education'
import Summary from './Summary'
import Contact from './Contact'

function OnePager() {
    return (
        <Wrapper>
            <Header>
                <Name>Amira Deuraseh</Name>
                <Summary />
            </Header>
            <Section>
                <Contact />
            </Section>
            <Section>
                <Title>Work Experience</Title>
                <WorkGrid />
            </Section>
            <Section>
                <Title>Certifications</Title>
                <CertsGrid />
            </Section>
            <Section>
                <Title>Education</Title>
                <Education />
            </Section>
            <Section>
                <Title>Languages</Title>
                <LanguageGrid />
            </Section>
        </Wrapper>
    )
}

const Wrapper = styled.div``
const Header = styled.div``
const Section = styled.div``

const Name = styled.h1`
    font-size: 3.2em;
`
const Title = styled.h2`
    font-size: 2.8em;
`

export default OnePager
