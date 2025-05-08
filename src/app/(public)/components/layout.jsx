'use client';

import Container from '@mui/material/Container';
import Header from '@/layouts/root/Navigation';
export default function Layout({
  children
}) {
  return <div>
      <Container maxWidth="lg">
        <Header />
      </Container>

      {children}
    </div>;
}