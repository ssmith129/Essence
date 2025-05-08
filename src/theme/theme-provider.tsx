'use client'

import { PropsWithChildren } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
// MUI THEME CREATION METHOD
import { createCustomTheme } from './create-theme'
// SITE SETTINGS CUSTOM DEFINED HOOK
import useSettings from '@/hooks/useSettings'

export default function ThemeProvider({ children }: PropsWithChildren) {
  const { settings } = useSettings()
  const theme = createCustomTheme(settings)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <AppRouterCacheProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </AppRouterCacheProvider>
    </LocalizationProvider>
  )
}
