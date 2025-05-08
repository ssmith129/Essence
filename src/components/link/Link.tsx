import { PropsWithChildren } from 'react'
import NextLink, { LinkProps } from 'next/link'

// ==============================================================
interface Props extends LinkProps {
  className?: string
}
// ==============================================================

export default function Link({ href, children, ...others }: PropsWithChildren<Props>) {
  return (
    <NextLink href={href} {...others}>
      {children}
    </NextLink>
  )
}
