import styled from 'styled-components'

import MaxWidthWrapper from './MaxWidthWrapper/MaxWidthWrapper'
import Navbar from './Navbar'
import Summary from './Summary'
import WorkGrid from './WorkGrid/WorkGrid'
import CertsGrid from './CertsGrid/CertsGrid'
import LanguageGrid from './LanguageGrid/LanguageGrid'
import Education from './Education'
import Footer from './Footer'

function OnePager() {
    return (
        <MaxWidthWrapper>
            <Header>
                <Navbar />
                <Summary />
            </Header>
            <Main>
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
            </Main>
            <Footer />
        </MaxWidthWrapper>
    )
}

const Header = styled.header``
const Main = styled.main`
    margin-block: 4rem;
`

const Section = styled.section`
    padding-block-end: 2rem;
`
const Title = styled.h2`
    margin-block-end: 0.4em;
    font-size: clamp(1.4rem, 4vw + 1rem, 2.8rem);
`

export default OnePager
