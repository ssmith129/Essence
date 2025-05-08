'use client'

import { PropsWithChildren } from 'react'
import Container from '@mui/material/Container'
import Header from '@/layouts/root/Navigation'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Container maxWidth="lg">
        <Header />
      </Container>

      {children}
    </div>
  )
}
