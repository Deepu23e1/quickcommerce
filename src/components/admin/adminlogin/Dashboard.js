import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid, Paper, Button, Avatar, Divider } from '@mui/material';
import { serverURL } from '../../../services/FetchNodeAdminServices';
import InboxIcon from '@mui/icons-material/Inbox';
import  { List,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material';
import { Routes,Route,useNavigate } from 'react-router-dom';
import Category from "../category/Category"
import DisplayAllCategory from "../category/DisplayAllCategory"
import Subcategory from "../category/Subcategory"
import DisplayAllsubCategory from '../category/DisplayAllsubCategory';
import Brand from "../category/Brand"
import DisplayAllBrand from "../category/DisplayAllBrand"
import Product from "../category/Product"
import DisplayAllProduct from "../category/DisplayAllProduct"
import ProductDetail from "../category/ProductDetail"
import DisplayAllProductDetail from "../category/DisplayAllProductDetail"
import Mainbanner from "../category/Mainbanner"
import Adoffers from "../category/Adoffers"
import ProductPicture from "../category/ProductPicture"
 import Bankandotheroffers from "../category/Bankandotheroffers"
export default function Dashboard() {
  var navigate=useNavigate()
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quickcomm
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    
        <Grid container spacing={2}>
          <Grid item xs={2} >
            <Paper elevation={3}style={{flexDirection:'column', display:'flex',alignItems:'center',height:600,margin:10}}>
             <div>
              <img src={`${serverURL}/images/doctorjatka.webp`} style={{width:100,height:100,borderRadius:50,marginTop:10}}/>
             </div>
             <div style={{fontSize:12,fontWeight:'bold',letterSpacing:1}}>
             Deepesh Pal
            </div>
            <div style={{fontSize:10,fontWeight:'bold',color:'grey'}}>
              dpal34036@gamil.com
            </div>
            <Divider style={{width:'90%',marginTop:10}} />
    
            <div>
              <List>
              <ListItem>
                  <ListItemButton >
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/dashboard.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                        Dashboard
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>


                <ListItem style={{marginTop:-25}}>
                  <ListItemButton  onClick={()=>navigate('/dashboard/displayallcategory')} >
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/category.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                        Category
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/dashboard/displayallsubcategory')}>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/subcategory.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                      SubCategory
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/dashboard/displayallbrands')}>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/brand-image.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                      brand
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/dashboard/displayallproducts')}>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/product-image.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                    products
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/dashboard/displayallproductdetail')}>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/product-catalog.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                     Product Catalogue
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/dashboard/mainbanner')}>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/ribbon-folds.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                    Banner
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/dashboard/adoffers')}>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/adimages.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                  Products Ad
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/dashboard/bankoffers')}>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/bank-account.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                     Bank Offers
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <ListItem style={{marginTop:-25}}>
                  <ListItemButton onClick={()=>navigate('/dashboard/displayallsubcategory')}>
                    <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <img src='/check-out.png' style={{width:30,height:30}}/>
                      <div style={{fontWeight:600,marginLeft:15}}>
                      Logout
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>

              </List>
              </div> 
            </Paper>
          </Grid>
          <Grid item xs={10}>
          <Routes>
          <Route element={<Category />} path="/category" />
          <Route element={<DisplayAllCategory />} path="/displayallcategory" />
          <Route element={<Subcategory />} path="/subcategory" />
          <Route element={<DisplayAllsubCategory />} path="/displayallsubcategory" />
          <Route element={<Brand />} path="/Brand" />
          <Route element={<DisplayAllBrand />} path="/displayallbrands" />
           <Route element={<Product/>} path="/product" />
        <Route element={<DisplayAllProduct />} path="/displayallproducts" />
         <Route element={<ProductDetail />} path="/productdetail" /> 
          <Route element={<DisplayAllProductDetail />} path="/displayallproductdetail" />
         <Route element={<ProductPicture />} path="/productpicture" />
          <Route element={<Mainbanner />} path="/mainbanner" />
          <Route element={<Bankandotheroffers />} path="/bankoffers" />
          <Route element={<Adoffers />} path="/adoffers" /> 
               </Routes>
          </Grid>
        </Grid>
    
    </Box>
  );
}
