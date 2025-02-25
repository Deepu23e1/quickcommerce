import * as React from 'react';
import { Typography, Grid, Box, Button } from "@mui/material";
import Header from './Header'; // Assuming Header is your custom component

export default function Addcart() {

  return (
    <Grid container spacing={2} style={{ padding: '20px' }}>
      {/* Header Component */}
      <Grid item xs={12}>
        <Header />
      </Grid>

      {/* Cart Section */}
      <Grid item xs={8}>
        <Box style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff', margin: '20px 0' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>Scheduled Delivery Basket (1)</Typography>

          {/* Product Details */}
          <Grid container spacing={2} style={{ marginTop: '10px' }}>
            <Grid item xs={3}>
              {/* Product Image */}
              
            </Grid>
            <Grid item xs={6}>
              {/* Product Description */}
              <Typography variant="body1">
                Wowper Fresh Baby Diaper Pants | Wetness Indicator | Upto 12 Hrs Absorption | 7-12 Kg | M (72 Pieces)
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Sold by: UNICLAN HEALTHCARE PRIVATE LIMITED
              </Typography>
            </Grid>
            <Grid item xs={3}>
              {/* Price and Discount */}
              <Typography variant="h6">₹435.00</Typography>
              <Typography variant="body2" style={{ textDecoration: 'line-through' }}>
                ₹1,099.00
              </Typography>
              <Typography variant="body2" color="green">
                You Save ₹664.00
              </Typography>
            </Grid>
          </Grid>
        </Box>
          
        {/* Checkout Button
        <Button variant="outlined" style={{ marginTop: '10px', width: '100%' }}>
          Proceed to Checkout
        </Button> */}
      </Grid>
      <Grid  item xs={4} >
      <Box style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff', margin: '20px 0' }}>
            hello
            </Box>
           </Grid>
    </Grid>
  );
}
