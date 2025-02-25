import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import { serverURL,postData } from "../../../services/FetchNodeAdminServices";
import { useEffect } from 'react';
import AddToCart from './AddToCart';
import { Avatar, Divider, Grid, Paper, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef } from "react";
import ProductDescription from './ProductDescription';
import Header from '../homepage/Header';


export default function ProductImageComponent({product}) {

  const [index, setIndex] = useState(0)
  var scrollRef = useRef()
  var settings = {
    dots: false,
    infinite: true,
    spaceBetween: 24,
    // autoplay: true,
    // autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    // afterChange: () => setIndex(index + 1),
    beforeChange: (current, next) => setIndex(next)
  };

  const [productImages,setProductImages]=useState([])
  const [selectedImage,setSelectedImage]=useState(product.picture)
// const fetchAllImages=async()=>{
// var response=await postData('userinterface/user_display_product_pictures',{productdetailid:product?.productdetailid})
// alert(JSON.stringify(response?.data))
// setProductImages(response?.data?.filenames?.split(","))

// }
//     useEffect(()=>{
//       fetchAllImages()
//     },[]) 


    

// const handleImage=(item)=>{
//   setSelectedImage(item)
// }

  const showImage = () => {
    return productImages.map((item, i) => {
      return <div>
        <img src={`${serverURL}/images/${item}`} style={{ width: '60%', borderRadius: 20, border: '1px solid #e0e0e0', padding: 6, }} />
      </div>
    })
  }


  const handleNext = () => {
    scrollRef.current.slickNext()

  }

  const handlePrev = () => {
    scrollRef.current.slickPrev()
  }
  {/*
var data=[{ productdetailname:'Maaza Mango Drink ', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
             offerprice:0, offertype:'Festival', productstatus:'Trending', picture:'maaza.webp'},
    { productdetailname:'Maggi 2-Minute Masala Noodles', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:420, 
             offerprice:390, offertype:'Festival', productstatus:'Trending', picture:'maggi.webp'},
     { productdetailname:'Britannia Nutri Choice Hi-Fibre Digestive Biscuits', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
            offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'britanniabisckit.webp'},
    { productdetailname:'Kissan Fresh Tomato Ketchup', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
           offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'tamatoshoop.jpg'},
    { productdetailname:'Cadbury Dairy Milk Chocolate Home Treats', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
             offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'chocolate.webp'},
   { productdetailname:'Brooke Bond Red Label Strong Blend Tea', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
            offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'redtea.webp'},
   { productdetailname:'Wagh Bakri Premium Leaf Tea ', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
             offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'waghbakri.webp'},
   { productdetailname:'Kelloggs Fruit, Nut & Seeds Muesli', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
              offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'kellogg.webp'},
    { productdetailname:'Brooke Bond Taj Mahal Tea', weight:250, weighttype:'gm', packagingtype:'1', noofqty:'1', stock:5, price:99, 
              offerprice:80, offertype:'Festival', productstatus:'Trending', picture:'tajchai.webp'}

        ]
*/}

  const showImages = () => {

    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '90%', }}>

        <div >
          <img src={`${serverURL}/images/${product.picture}`} style={{ height: 450, width: "95%" }} />
        </div>

        <div style={{ marginLeft: 60 }}>
          <AddToCart />
        </div>
      </div>
    )

  }


  return (
  
    <div style={{ marginLeft: 20, display: 'flex', marginTop: 10, position: 'relative' }}>
       
      <div onClick={handleNext} style={{ cursor: 'pointer', marginLeft: -3, marginBottom: 50, marginTop: 5, position: 'absolute', zIndex: 1, background: '#fff', width: 80, height: 35, verticalAlign: 'top', transition: 'cubic-bezier(0.35, 0, 0.25, 1) 300ms', borderRadius: 22, border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <KeyboardArrowUpIcon style={{ color: '#0c5273' }} />
      </div>

      <div elevation={0.5} >
        <Slider ref={scrollRef} {...settings} style={{ position: 'relative', objectFit: 'contain', marginTop: 35, paddingTop: 15, overflow: 'hidden', width: 100, }}>
          {showImage()}
        </Slider>
      </div>

      <div onClick={handlePrev} style={{ cursor: 'pointer', marginLeft: -3, marginTop: 380, position: 'absolute', zIndex: 1, background: '#fff', width: 80, height: 35, transition: 'cubic-bezier(0.35, 0, 0.25, 1) 300ms', borderRadius: 22, border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <KeyboardArrowDownIcon style={{ color: '#0c5273' }} />
      </div>


      <Paper elevation={0.5} style={{ position: 'relative', padding: 16, borderRadius: 24, border: '1px solid #e0e0e0', overflow: 'hidden' ,height:550}}>

        <Slider style={{ display: 'flex', justifyContent: 'center', marginLeft: -5, height: 500, width:400}} >
          {showImages()}
        </Slider>

      </Paper>
     
      {/* <span><ProductDescription product={product} index={index} /></span> */}
      
      </div>
     
      

   
  )
}