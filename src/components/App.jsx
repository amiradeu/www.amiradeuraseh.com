import styled from 'styled-components'
import Writing from './Writing'

function App() {
    return (
        <Wrapper>
            <Writing>i'm feeling lost,</Writing>
            <Writing>this sadness consumes me,</Writing>
            <Writing>teach me how to live,</Writing>
            <Writing>with all this humanity.</Writing>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 1.4em;
    padding: 120px 48px;
`

export default App
