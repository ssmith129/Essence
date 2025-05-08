import { AuthProvider } from '@/contexts/jwtContext';
export default function Layout({
  children
}) {
  return <AuthProvider>{children}</AuthProvider>;
}