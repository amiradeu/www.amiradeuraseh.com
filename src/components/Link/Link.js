import styled from 'styled-components'

function Link({ href, children, ...delegated }) {
    console.log(href && children)

    if (!href) return <>{children}</>

    return (
        <Underline href={href} {...delegated}>
            {children}
        </Underline>
    )
}

const Underline = styled.a`
    box-shadow: 0px 1.5px 0px var(--color-primary);

    &:hover {
        color: var(--color-primary);
        box-shadow: 0px 0px 0px transparent;
    }
`

export default Link
