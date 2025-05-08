'use client'

import { PropsWithChildren } from 'react'
import { AuthProvider } from '@/contexts/amplifyContext'

export default function Layout({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>
}
