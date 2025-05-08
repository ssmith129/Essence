import { PropsWithChildren } from 'react'
import { AuthProvider } from '@/contexts/jwtContext'

export default function Layout({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>
}
