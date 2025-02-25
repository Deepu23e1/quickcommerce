import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid, Box } from "@mui/material";
import AdScroll from './AdScroll';
import ProductsScroll from './ProductsScroll';
import { serverURL } from "../../../services/FetchNodeAdminServices";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { setRef } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductDetailsCategory from './ProductDetailsCategory';
import Header from './Header'
// Custom styling for Accordion components
const Accordion = styled((props) => (


  
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
  maxWidth: '350px', // Adjust this value to control the width
  margin: '10px auto', // Center the accordion
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center', // Align text and image
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

// JSON data for categories and subcategories
const categories = [
  {
    name: 'Drinks',
    subcategories: ['Tea', 'Coffee', 'Juice', 'Soda', 'Water'],
  },
  {
    name: 'Foods',
    subcategories: ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sandwich'],
  },
  {
    name: 'Clothes',
    subcategories: ['Shirts', 'Jeans', 'Jackets', 'Trousers', 'T-Shirts'],
  },
  {
    name: 'Medical',
    subcategories: ['First Aid Kit', 'Medicines', 'Bandages', 'Thermometer', 'Gloves'],
  },
  {
    name: 'Toys',
    subcategories: ['Action Figures', 'Dolls', 'Building Blocks', 'Puzzles', 'Cars'],
  },
  {
    name: 'Study Material',
    subcategories: ['Books', 'Notebooks', 'Pens', 'Markers', 'Erasers'],
  },
];

export default function ShowCategory() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid  >
  <div>
        <Header />
        </div>
   
    
    
    <Grid container spacing={3}> {/* Added spacing prop here */}
     
      <Grid item xs={4}>
        {categories.map((category, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              aria-controls={`panel${index}d-content`}
              id={`panel${index}d-header`}
            >
              <Typography style={{ fontWeight: 'bold' }}>{category.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {category.subcategories.map((subcategory, subIndex) => (
                <Typography key={subIndex} style={{ marginLeft: '20px' }}>
                  - {subcategory}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>

      <Grid item xs={8}>
        {/* Placeholder for the right-side content */}
        <ProductDetailsCategory />
      </Grid>
    </Grid>
    </Grid>
  );
}
