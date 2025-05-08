'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// CUSTOM DEFINED HOOK
import useAuth from '@/hooks/useAuth'

export default function AuthGuard({ children }: PropsWithChildren) {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) router.replace('/login')
    else setIsLoggedIn(true)
  }, [isAuthenticated, router])

  if (isLoggedIn) return <>{children}</>

  return null
}
