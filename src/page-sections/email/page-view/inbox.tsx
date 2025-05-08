import { useRouter } from 'next/navigation'
// MUI
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
// MUI ICON COMPONENT
import StarBorder from '@mui/icons-material/StarBorder'
// CUSTOM COMPONENTS
import FlexBox from '@/components/flexbox/FlexBox'
// CUSTOM LAYOUT COMPONENT
import Layout from '../Layout'
// CUSTOM ICON COMPONENTS
import Trash from '@/icons/duotone/Trash'
import Archive from '@/icons/duotone/Archive'
import UnreadMail from '@/icons/duotone/UnreadMail'
// STYLED COMPONENTS
import { MailActionWrapper, MailItem } from '../styles'

export default function MailInboxPageView() {
  const router = useRouter()
  const upSm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'))

  return (
    <Layout>
      {/* MAIL LIST  */}
      {Array.from({ length: 5 }).map((_, i) => (
        <MailItem key={i} onClick={() => router.push('/dashboard/email/details')}>
          <FlexBox alignItems="center" gap={2}>
            {upSm && <Checkbox size="small" sx={{ p: 0 }} />}

            {upSm && (
              <Tooltip title="Starred">
                <IconButton size="small" sx={{ p: 0 }}>
                  <StarBorder fontSize="small" />
                </IconButton>
              </Tooltip>
            )}

            <Avatar src="/static/user/user-11.png" sx={{ width: 25, height: 25 }} />

            {upSm && (
              <Typography variant="body2" fontWeight={600}>
                Penni Nojel
              </Typography>
            )}
          </FlexBox>

          <Typography variant="body2" flex={1} color="text.secondary" noWrap={upSm}>
            How to Choose the Perfect Shopify Theme and Build Your Online Store Fast!
          </Typography>

          <Typography variant="body2" fontSize={12} className="time" color="text.secondary">
            1:45 PM
          </Typography>

          <MailActionWrapper className="actions">
            <Tooltip title="Archive">
              <IconButton color="secondary">
                <Archive fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Trash">
              <IconButton color="secondary">
                <Trash fontSize="small" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Unread">
              <IconButton color="secondary">
                <UnreadMail fontSize="small" />
              </IconButton>
            </Tooltip>
          </MailActionWrapper>
        </MailItem>
      ))}
    </Layout>
  )
}
