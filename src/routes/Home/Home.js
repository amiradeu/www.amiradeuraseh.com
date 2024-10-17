import styled from 'styled-components'

import RagingSea from '../../experiences/RagingSea'

function Home() {
    return (
        <>
            <ExperienceWrapper>
                <RagingSea />
            </ExperienceWrapper>
            <LinkWrapper>
                <Link href='/resume'>See Resume</Link>
            </LinkWrapper>
            <MobileWrapper>
                <MobileTap>
                    Tap anywhere on screen to move the light ✨
                </MobileTap>
            </MobileWrapper>
        </>
    )
}

const ExperienceWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

const LinkWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    display: grid;
    place-content: center;
    height: 100%;
    width: 100%;
`

const Link = styled.a`
    padding: 1em;
    border: 1px solid;
    border-radius: 50%;
    color: var(--color-white);

    &:hover {
        color: var(--color-secondary);
    }
`

const MobileWrapper = styled.div`
    display: none;

    @media (hover: none), (pointer: course) {
        display: block;
        position: absolute;
        bottom: 16px;
        left: 0;
        width: 100%;
    }
`

const MobileTap = styled.p`
    color: var(--color-gray-300);
    text-align: center;
    font-size: var(--small-text-size);
`

export default Home
