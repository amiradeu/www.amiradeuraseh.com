import React from 'react'
import styled from 'styled-components'

function PDFResume() {
    return (
        <Wrapper>
            <Text>
                Feel free to{' '}
                <Link href='/docs/AmiraDeuraseh_Resume.pdf' download>
                    download a PDF version
                </Link>{' '}
                of this resume.
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.div``
const Text = styled.p``
const Link = styled.a`
    border: 1px solid var(--color-gray-300);
    border-radius: 0.4em;
    padding: 0 0.4em;

    &:hover {
        border-color: var(--color-gray-700);
    }
`

export default PDFResume
