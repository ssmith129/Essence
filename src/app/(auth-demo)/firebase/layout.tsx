import { AuthProvider } from '@/contexts/firebaseContext'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
