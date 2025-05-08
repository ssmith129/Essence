import { Fragment } from 'react';
// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// CUSTOM COMPONENTS
import ComponentPreviewCard from './ComponentPreviewCard';
export default function ComponentsPageView() {
  return <Fragment>
      <Container sx={{
      py: {
        sm: 10,
        xs: 5
      }
    }}>
        <Typography variant="body1" fontWeight={600} fontSize={28}>
          Components
        </Typography>

        <Typography variant="body1" sx={{
        mt: 0.5,
        color: 'text.secondary',
        maxWidth: {
          sm: 500
        }
      }}>
          Vast collection of components that will cover all your needs from simple to complex UI.
        </Typography>
      </Container>

      <Divider />

      <Container sx={{
      py: {
        sm: 10,
        xs: 5
      }
    }}>
        <Box mb={5}>
          <Typography variant="body1" fontWeight={600} fontSize={20}>
            MUI
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Customized components from{' '}
            <a href="https://mui.com/components" target="_blank">
              Material UI
            </a>
            .
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {componentList.map((component, i) => <Grid size={{
          md: 3,
          sm: 4,
          xs: 6
        }} key={i}>
              <ComponentPreviewCard link={component.link} title={component.title} image={component.image} />
            </Grid>)}
        </Grid>
      </Container>

      <Divider />
    </Fragment>;
}
const componentList = [{
  id: 1,
  title: 'Accordion',
  link: '/components/mui/accordion',
  image: '/static/components/accordion.png'
}, {
  id: 2,
  title: 'Alert',
  link: '/components/mui/alert',
  image: '/static/components/alert.png'
}, {
  id: 3,
  title: 'Autocomplete',
  link: '/components/mui/autocomplete',
  image: '/static/components/autocomplete.png'
}, {
  id: 4,
  title: 'Avatar',
  link: '/components/mui/avatar',
  image: '/static/components/avatar.png'
}, {
  id: 5,
  title: 'Badge',
  link: '/components/mui/badge',
  image: '/static/components/badge.png'
}, {
  id: 6,
  title: 'Breadcrumbs',
  link: '/components/mui/breadcrumbs',
  image: '/static/components/breadcrumbs.png'
}, {
  id: 7,
  title: 'Buttons',
  link: '/components/mui/buttons',
  image: '/static/components/buttons.png'
}, {
  id: 8,
  title: 'Checkbox',
  link: '/components/mui/checkbox',
  image: '/static/components/checkbox.png'
}, {
  id: 9,
  title: 'Chip',
  link: '/components/mui/chip',
  image: '/static/components/chip.png'
}, {
  id: 10,
  title: 'Data Grid',
  link: '/components/mui/data-grid',
  image: '/static/components/data-grid.png'
}, {
  id: 11,
  title: 'Dialog',
  link: '/components/mui/dialog',
  image: '/static/components/dialog.png'
}, {
  id: 12,
  title: 'List',
  link: '/components/mui/list',
  image: '/static/components/list.png'
}, {
  id: 13,
  title: 'Menu',
  link: '/components/mui/menu',
  image: '/static/components/menu.png'
}, {
  id: 14,
  title: 'Pagination',
  link: '/components/mui/pagination',
  image: '/static/components/pagination.png'
}, {
  id: 15,
  title: 'Pickers',
  link: '/components/mui/pickers',
  image: '/static/components/pickers.png'
}, {
  id: 16,
  title: 'Popover',
  link: '/components/mui/popover',
  image: '/static/components/popover.png'
}, {
  id: 17,
  title: 'Progress',
  link: '/components/mui/progress',
  image: '/static/components/progress.png'
}, {
  id: 18,
  title: 'Radio Button',
  link: '/components/mui/radio-button',
  image: '/static/components/radio-button.png'
}, {
  id: 19,
  title: 'Rating',
  link: '/components/mui/rating',
  image: '/static/components/rating.png'
}, {
  id: 20,
  title: 'Slider',
  link: '/components/mui/slider',
  image: '/static/components/slider.png'
}, {
  id: 30,
  title: 'Snackbar',
  link: '/components/mui/snackbar',
  image: '/static/components/tree-view.png'
}, {
  id: 21,
  title: 'Stepper',
  link: '/components/mui/stepper',
  image: '/static/components/stepper.png'
}, {
  id: 22,
  title: 'Switch',
  link: '/components/mui/switch',
  image: '/static/components/switch.png'
}, {
  id: 23,
  title: 'Table',
  link: '/components/mui/table',
  image: '/static/components/table.png'
}, {
  id: 24,
  title: 'Tabs',
  link: '/components/mui/tabs',
  image: '/static/components/tabs.png'
}, {
  id: 25,
  title: 'Textfield',
  link: '/components/mui/textfield',
  image: '/static/components/textfield.png'
}, {
  id: 26,
  title: 'Timeline',
  link: '/components/mui/timeline',
  image: '/static/components/timeline.png'
}, {
  id: 27,
  title: 'Tooltip',
  link: '/components/mui/tooltip',
  image: '/static/components/tooltip.png'
}, {
  id: 28,
  title: 'Transfer List',
  link: '/components/mui/transfer-list',
  image: '/static/components/transfer-list.png'
}, {
  id: 29,
  title: 'Tree View',
  link: '/components/mui/tree-view',
  image: '/static/components/tree-view.png'
}];