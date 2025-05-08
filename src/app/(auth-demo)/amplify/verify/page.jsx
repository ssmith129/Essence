'use client';

import { useState, use } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MuiOtpInput } from 'mui-one-time-password-input';
// MUI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// AMPLIFY CONTEXT FILE
import { AuthContext } from '@/contexts/amplifyContext';
// CUSTOM ICON COMPONENT
import ChevronLeft from '@/icons/ChevronLeft';
export default function VerifyView() {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    resendCode,
    emailVerify
  } = use(AuthContext);
  const email = searchParams.get('email');
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (otp.length !== 6) {
        alert('Invalid Code!');
        setLoading(false);
        return;
      }
      if (email && otp) {
        await emailVerify(email, otp);
        router.push('/amplify/login');
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleResendCode = async () => {
    try {
      await resendCode(email);
    } catch (error) {
      console.log(error);
    }
  };
  return <Container>
      <Box textAlign="center" py={{
      sm: 6,
      xs: 4
    }}>
        <Box maxWidth={120} margin="auto">
          <img src="/static/pages/email.svg" alt="email" width="100%" />
        </Box>

        <Typography variant="body1" sx={{
        fontWeight: 600,
        marginBottom: 2,
        marginTop: {
          sm: 4,
          xs: 2
        },
        fontSize: {
          sm: 52,
          xs: 36
        }
      }}>
          Check your email!
        </Typography>

        <Typography variant="body2" sx={{
        maxWidth: 650,
        marginTop: 0.5,
        margin: 'auto',
        color: 'text.secondary',
        fontSize: {
          sm: 18,
          xs: 14
        }
      }}>
          Please check your email inbox for a 6-digit verification code we have sent to your
          registered email address. Enter the code in the field below to confirm your email and
          complete the verification process.
        </Typography>

        <Box maxWidth={450} margin="auto" mt={6}>
          <MuiOtpInput value={otp} length={6} onChange={setOtp} TextFieldsProps={{
          size: 'medium',
          sx: {
            marginBottom: '2rem'
          }
        }} />

          <Button loading={loading} fullWidth onClick={handleSubmit}>
            Verify
          </Button>
        </Box>

        <Typography variant="body1" sx={{
        mt: 4,
        span: {
          fontWeight: 500,
          cursor: 'pointer',
          color: 'error.main'
        }
      }}>
          Don’t have a code? <span onClick={handleResendCode}>Resend code</span>
        </Typography>

        <Button variant="text" disableRipple>
          <ChevronLeft /> Return to sign in
        </Button>
      </Box>
    </Container>;
}