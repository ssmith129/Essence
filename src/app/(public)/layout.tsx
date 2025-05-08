import { PropsWithChildren } from 'react'
import RootLayout from '@/layouts/root/RootLayout'

export default function PublicLayout({ children }: PropsWithChildren) {
  return <RootLayout>{children}</RootLayout>
}
