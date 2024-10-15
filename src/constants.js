export const COLORS = {
    white: 'hsl(0deg 0% 100%)',
    offblack: 'hsl(24deg 5% 6%)',
    gray: {
        100: 'hsl(40deg 12% 95%)',
        300: 'hsl(35deg 8% 80%)',
        500: 'hsl(30deg 4% 60%)',
        700: 'hsl(28deg 5% 40%)',
        900: 'hsl(24deg 6% 16%)',
    },
    primary: 'hsl(225deg 75% 41%)',
    secondary: '#e8e812',
    urgent: 'hsl(327deg 89% 44%)',
}

export const BREAKPOINTS = {
    tabletMin: 550,
    laptopMin: 1100,
    desktopMin: 1500,
}

export const QUERIES = {
    tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
    laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
    desktopAndDown: `(max-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
    tabletOnly: `
      (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
      (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
}

export const WEIGHTS = {
    normal: 400,
    medium: 550,
    bold: 700,
}

export const FAMILIES = {
    serif: 'serif',
    sansSerif: '"Cormorant Garamond", serif',
}

export const SIZES = {
    heading: {
        1: '3.8rem',
        2: '2.8rem',
        3: '2.2rem',
        4: '1.2rem',
    },
    text: {
        large: '1.5rem',
        normal: '1.2rem',
        small: '1rem',
    },
    lineHeight: {
        heading: '1.1em',
        body: '1.4em',
    },
    letterSpacing: {
        heading: '0em',
        body: '0em',
    },
}
