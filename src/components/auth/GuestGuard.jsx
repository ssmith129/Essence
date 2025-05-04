'use client';

import { useEffect } from 'react';
// CUSTOM DEFINED HOOK
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
export default function GuestGuard({
  children
}) {
  const router = useRouter();
  const {
    isAuthenticated
  } = useAuth();
  useEffect(() => {
    if (isAuthenticated) router.replace('/dashboard');
  }, [isAuthenticated, router]);
  return <>{children}</>;
}