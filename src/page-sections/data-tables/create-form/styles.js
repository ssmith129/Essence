import { styled } from '@mui/material/styles';
// CUSTOM COMPONENTS
import Modal from '@/components/modal';

// STYLED COMPONENT
export const StyledModal = styled(Modal)(({
  theme
}) => ({
  maxWidth: 575,
  minWidth: 200,
  [theme.breakpoints.down(325)]: {
    maxWidth: '100%'
  },
  '.button-group': {
    gap: '1rem',
    display: 'flex',
    marginTop: '2rem'
  },
  '.title': {
    lineHeight: 1,
    fontWeight: 500,
    fontSize: '1rem',
    marginBottom: '1.5rem'
  }
}));