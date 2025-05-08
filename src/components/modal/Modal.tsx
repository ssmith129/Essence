import { PropsWithChildren } from 'react'
import MuiModal from '@mui/material/Modal'
import { SxProps, Theme } from '@mui/material/styles'
// STYLED COMPONENT
import { StyledScrollbar, Wrapper } from './styles'

// ===========================================================================
interface ModalProps extends PropsWithChildren {
  open: boolean
  handleClose: () => void
  sx?: SxProps<Theme>
}
// ===========================================================================

export default function Modal({ children, open, sx, handleClose }: ModalProps) {
  return (
    <MuiModal open={open} onClose={handleClose}>
      <Wrapper sx={sx}>
        <StyledScrollbar>{children}</StyledScrollbar>
      </Wrapper>
    </MuiModal>
  )
}
