// https://github.com/apal21/nextjs-progressbar/issues/86

'use client'

import { useEffect } from 'react'
import NProgress from 'nprogress'
import { useTheme } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'

import 'nprogress/nprogress.css'

type PushStateInput = [data: any, unused: string, url?: string | URL | null | undefined]

export default function ProgressBar() {
  const theme = useTheme()

  useEffect(() => {
    NProgress.configure({ showSpinner: false })

    const handleAnchorClick = (event: MouseEvent) => {
      const anchorElement = event.currentTarget as HTMLAnchorElement

      // Skip anchors with target attribute but different than _self
      if (anchorElement.target !== '_self' && anchorElement.target?.trim() !== '') return

      // Skip anchors with download attribute
      if (anchorElement.hasAttribute('download')) return

      if (location.href !== anchorElement.href) NProgress.start()
    }

    const handleMutation: MutationCallback = () => {
      const anchorElements = document.querySelectorAll('a[href]') as NodeListOf<HTMLAnchorElement>
      anchorElements.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick))
    }

    const mutationObserver = new MutationObserver(handleMutation)
    mutationObserver.observe(document, { childList: true, subtree: true })

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray: PushStateInput) => {
        NProgress.done()
        return target.apply(thisArg, argArray)
      },
    })
  })

  return (
    <GlobalStyles
      styles={{
        '#nprogress': {
          pointerEvents: 'none',
          '.bar': {
            top: 0,
            left: 0,
            height: 2,
            width: '100%',
            position: 'fixed',
            zIndex: 9999999999,
            background: theme.palette.primary.main,
          },
          '.peg': {
            right: 0,
            opacity: 1,
            width: 100,
            height: '100%',
            display: 'block',
            boxShadow: 'none',
            position: 'absolute',
            transform: 'rotate(3deg) translate(0px, -4px)',
          },
        },
      }}
    />
  )
}
