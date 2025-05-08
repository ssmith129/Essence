import { Metadata } from 'next'

import ErrorPageView from '@/page-sections/error/ErrorPageView'

export const metadata: Metadata = {
  title: '404 - Not Found!',
}

export default function NotFound() {
  return <ErrorPageView />
}
