import { Components } from '@mui/material/styles'

export const Card = (): Components['MuiCard'] => ({
  styleOverrides: {
    root: {
      borderRadius: 12,
      backgroundImage: 'none',
      // boxShadow: 'rgba(0, 0, 0, 0.04) 0px 1px 6px',
    },
  },
  defaultProps: { elevation: 1 },
})
