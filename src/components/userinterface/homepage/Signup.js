import React from 'react';
import { Card, CardContent, Typography, TextField, Button, IconButton, Grid } from '@mui/material';
import { Close } from '@mui/icons-material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [number, setNumber] = React.useState(''); // Initialize as an empty string

  const handleSubmit = () => {
    if (number.length === 10) {  
      navigate('/verify');
    } else {
      Swal.fire({
        icon: "error",
        title: "Fail",
        showConfirmButton: false,
        timer: 2500,
        toast: true
      });
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Card style={{ width: '360px', height: '500px', borderRadius: '15px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Grid container justifyContent="flex-end">
          <IconButton>
            <Close />
          </IconButton>
        </Grid>
        <CardContent style={{ paddingTop: '0' }}>
          <Grid style={{ display: 'flex' }}>
            <Grid container alignItems="center" style={{ marginBottom: '10px' }}>
              <Typography variant="h5" component="h2" style={{ fontWeight: 'bold' }}>
                Sign in
              </Typography>

              <Typography style={{ marginBottom: '20px' }}>
                Verify your mobile number to access your <strong style={{ color: '#0078FF' }}>JioMart</strong> account
              </Typography>
            </Grid>

            <Grid>
              <LockIcon style={{ fontSize: 40, color: 'red', marginRight: '8px' }} />
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Mobile number"
            variant="standard"
            InputProps={{
              startAdornment: <Typography style={{ marginRight: '8px' }}>+91</Typography>,
            }}
            style={{ marginBottom: '40px' }}
            value={number} 
            onChange={(e) => setNumber(e.target.value)} // Update state when input changes
          />

          <Button 
            onClick={handleSubmit}
            variant="contained"
            fullWidth
            style={{
              backgroundColor: '#d0d8fc',
              color: '#fff',
              marginTop: '20px',
              textTransform: 'none',
              fontSize: '16px',
              height: '45px',
            }}
          >
            Continue
          </Button>

          <Typography variant="body2" style={{ marginTop: '20px', fontSize: '12px' }}>
            By continuing, you agree to our <a href="#">Terms and Conditions of Use</a>, <a href="#">Privacy Policy</a> and <a href="#">Retail Account Privacy Policy</a>.
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Login;
