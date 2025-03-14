import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '@/shared/lib/createEmotionCache'
import theme from '@/theme/theme'

const clientSideEmotionCache = createEmotionCache();

const UiThemeProvider = ({ children, emotionCache = clientSideEmotionCache }) => {
    return (
        <CacheProvider value={emotionCache}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </CacheProvider>
    )
}

export default UiThemeProvider
