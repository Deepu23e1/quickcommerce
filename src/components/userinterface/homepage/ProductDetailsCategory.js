import  ProductsScroll  from './ProductsScroll';

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
export default function ProductDetailsCategory(){
    return(<div>

<div style={{width:'200%',alignSelf:'center',marginTop:40}} >
       < ProductsScroll />
        </div>
        <div style={{width:'200%',alignSelf:'center',marginTop:40}} >
       < ProductsScroll />
        </div>


    </div>)
}