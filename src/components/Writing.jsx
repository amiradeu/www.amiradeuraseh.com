import styled from 'styled-components'

function Writing({ children }) {
    const characters = children.split('')

    return (
        <div>
            {characters.map((character, index) => {
                return <Character key={index}>{character}</Character>
            })}
        </div>
    )
}

const Character = styled.span``
export default Writing
