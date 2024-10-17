import { useRouteError } from 'react-router-dom'
import styled from 'styled-components'

function Error() {
    const error = useRouteError()
    console.error(error)

    return (
        <Wrapper>
            <Title>Oops! </Title>
            <Message>Sorry, an unexpected error has occurred.</Message>
            <ErrorMessage>
                <i>{error.statusText || error.message}</i>
            </ErrorMessage>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    height: 100%;
    place-content: center;
`

const Title = styled.h1`
    font-size: clamp(1.5rem, 4vw + 1rem, 3.8rem);
`

const Message = styled.p``
const ErrorMessage = styled.p`
    color: var(--color-urgent);
`
export default Error
