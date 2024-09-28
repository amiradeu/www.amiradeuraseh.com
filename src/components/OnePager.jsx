import styled from 'styled-components'

import MaxWidthWrapper from './MaxWidthWrapper/MaxWidthWrapper'
import WorkGrid from './WorkGrid/WorkGrid'
import CertsGrid from './CertsGrid/CertsGrid'
import LanguageGrid from './LanguageGrid/LanguageGrid'
import Education from './Education'
import Summary from './Summary'
import Contact from './Contact'

function OnePager() {
    return (
        <MaxWidthWrapper>
            <Header>
                {/* <Name>Amira Deuraseh</Name> */}
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
        </MaxWidthWrapper>
    )
}

const Header = styled.div``
const Section = styled.div``

const Name = styled.h1``
const Title = styled.h1``

export default OnePager
