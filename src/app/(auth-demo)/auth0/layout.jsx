import { AuthProvider } from '@/contexts/auth0Context';
export default function Layout({
  children
}) {
  return <AuthProvider>{children}</AuthProvider>;
}