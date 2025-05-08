'use client';

import { AuthProvider } from '@/contexts/amplifyContext';
export default function Layout({
  children
}) {
  return <AuthProvider>{children}</AuthProvider>;
}