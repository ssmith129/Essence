import { ReactNode } from 'react'
import { SxProps, Theme } from '@mui/material/styles'
// STYLED COMPONENTS
import { Dot, DotList } from '../styles'

// ==============================================================
interface Props {
  dotColor?: string
  sx?: SxProps<Theme>
}
// ==============================================================

export default function CarouselDots({ dotColor, sx }: Props) {
  return {
    customPaging: () => <Dot dotColor={dotColor} />,
    appendDots: (dots: ReactNode) => <DotList sx={sx}>{dots}</DotList>,
  }
}
