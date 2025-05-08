import { GuestGuard } from '@/components/auth';
export default function AuthLayout({
  children
}) {
  return <GuestGuard>{children}</GuestGuard>;
}