import { PropsWithChildren } from 'react'
import { GuestGuard } from '@/components/auth'

export default function AuthLayout({ children }: PropsWithChildren) {
  return <GuestGuard>{children}</GuestGuard>
}
