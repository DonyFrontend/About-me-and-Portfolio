// theme.js

// 1. import `extendTheme` function and type
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
export const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme;