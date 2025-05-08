'use client'

import { PropsWithChildren } from 'react'
// CUSTOM DEFINED HOOK
import useAuth from '@/hooks/useAuth'
// CUSTOM COMPONENTS
import ErrorView from '@/page-sections/permission/ErrorView'

// ==============================================================
interface Props extends PropsWithChildren {
  roles: string[]
}
// ==============================================================

export default function RoleBasedGuard({ children, roles }: Props) {
  const { user } = useAuth()

  const loggedInUserRole = user?.role

  if (loggedInUserRole && roles.includes(loggedInUserRole)) return <>{children}</>

  return <ErrorView />
}
