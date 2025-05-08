import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

// INTER FONTS
import { publicSans } from '@/utils/font'

import { LoadingProgress } from '@/components/loader'

// THEME PROVIDER
import ThemeProvider from '@/theme/theme-provider'
// SITE SETTINGS CONTEXT
import SettingsProvider from '@/contexts/settingsContext'
// FIREBASE AUTH PROVIDER
import { AuthProvider } from '@/contexts/firebaseContext'
// RIGHT-TO-LEFT SUPPORT COMPONENT
import RTL from '@/components/rtl'
// MULTI LANGUAGE FEATURE
import '@/i18n'

// ALL THIRD PARTY LIBRARIES CSS
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'simplebar-react/dist/simplebar.min.css'

export const metadata: Metadata = {
  title: 'Essence Dashboard Template',
  description: 'Nextjs Admin Template',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={publicSans.className} suppressHydrationWarning>
        <SettingsProvider>
          <ThemeProvider>
            <AuthProvider>
              <LoadingProgress />
              <RTL>{children}</RTL>
            </AuthProvider>
          </ThemeProvider>
        </SettingsProvider>
      </body>
    </html>
  )
}
