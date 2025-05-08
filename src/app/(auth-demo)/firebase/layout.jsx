import { AuthProvider } from '@/contexts/firebaseContext';
export default function Layout({
  children
}) {
  return <AuthProvider>{children}</AuthProvider>;
}