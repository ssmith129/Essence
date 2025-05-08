import { PropsWithChildren } from 'react'
import { AuthProvider } from '@/contexts/auth0Context'

export default function Layout({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>
}
