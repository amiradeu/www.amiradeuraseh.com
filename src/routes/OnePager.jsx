import styled from 'styled-components'

import MaxWidthWrapper from '../components/MaxWidthWrapper/MaxWidthWrapper'
import Navbar from '../components/Navbar'
import Summary from '../components/Summary'
import PDFResume from '../components/PDFResume'
import WorkGrid from '../components/WorkGrid/WorkGrid'
import CertsGrid from '../components/CertsGrid/CertsGrid'
import AwardGrid from '../components/AwardGrid/AwardGrid'
import LanguageGrid from '../components/LanguageGrid/LanguageGrid'

import Education from '../components/Education'
import Footer from '../components/Footer'

import Skills from '../experiences/Skills'

function OnePager() {
    return (
        <>
            <MaxWidthWrapper>
                <Header>
                    <Navbar />
                    <Summary />
                    <PDFResume />
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
                        <Title>Awards</Title>
                        <AwardGrid />
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
        </>
    )
}

const Header = styled.header`
    margin-block-end: 4rem;
`
const Main = styled.main`
    margin-block-end: 4rem;
`

const Section = styled.section`
    padding-block-end: 2rem;
`
const Title = styled.h2`
    margin-block-end: 0.4em;
    font-size: clamp(1.4rem, 4vw + 1rem, 2.8rem);
`

const ExperienceWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

export default OnePager
