import { Fragment, PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'
// MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
// MUI ICON COMPONENTS
import KeyboardBackspace from '@mui/icons-material/KeyboardBackspace'
import InsertDriveFileOutlined from '@mui/icons-material/InsertDriveFileOutlined'

// ==============================================================
interface LayoutProps extends PropsWithChildren {
  title: string
  fullLink?: string
}
// ==============================================================

export default function ComponentPageLayout({ title, children, fullLink }: LayoutProps) {
  const theme = useTheme()
  const router = useRouter()

  const url = fullLink ?? `https://mui.com/material-ui/react-${title.toLowerCase()}`

  return (
    <Fragment>
      <Box
        sx={(theme) => ({
          py: { sm: 10, xs: 5 },
          backgroundColor: theme.palette.grey[100],
          ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
          }),
        })}
      >
        <Container>
          <Typography variant="body1" sx={{ mb: 2, fontWeight: 600, fontSize: 24 }}>
            {title}
          </Typography>

          <Button
            onClick={() => router.push('/components')}
            startIcon={<KeyboardBackspace fontSize="small" />}
            sx={{ mr: 2 }}
          >
            Go Back
          </Button>

          <Button
            href={url}
            target="_blank"
            color="secondary"
            variant="outlined"
            startIcon={<InsertDriveFileOutlined />}
          >
            Browse {title} Doc
          </Button>
        </Container>
      </Box>

      <Divider />

      <Container component={Stack} spacing={6} sx={{ py: { sm: 10, xs: 5 } }}>
        {children}
      </Container>

      <Divider />
    </Fragment>
  )
}
