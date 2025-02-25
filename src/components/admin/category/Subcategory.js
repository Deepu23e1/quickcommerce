import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  TextField,
  Avatar,
} from "@mui/material";
import logo from "../../../asset/logo.png.png";
import cart from "../../../asset/cart.png";
import SaveIcon from "@mui/icons-material/Save";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

import {
  postData,
  getData,
  currentDate,
  createDate,
} from "../../../services/FetchNodeAdminServices";
import { userStyle } from "../category/CategoryCss";
export default function Subcategory(props) {
  var classes = userStyle();
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryName, setsubCategoryName] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  const fetchAllCategory = async () => {
    var result = await getData("category/display_all_category");
    setCategoryList(result.data);
  };
  useEffect(function () {
    fetchAllCategory();
  }, []);

  const fillCategory = () => {
    return categoryList.map((item) => {
      return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>;
    });
  };
  const [subcategoryIcon, setsubCategoryIcon] = useState({
    bytes: "",
    fileName: cart,
  });
  const [errorMessages, setErrorMessages] = useState({});
  const handleErrorMessages = (label, message) => {
    var msg = errorMessages;
    msg[label] = message;
    setErrorMessages((prev) => ({ ...prev, ...msg }));
  };
  const resetValue = () => {
    setCategoryId("");
    setsubCategoryName("");
    setsubCategoryIcon({ bytes: "", fileName: cart });
  };
  const handleImageChange = (e) => {
    setsubCategoryIcon({
      bytes: e.target.files[0],
      fileName: URL.createObjectURL(e.target.files[0]),
    });
  };
  const handleSubmit = async () => {
    setLoadingStatus(true);
    var formData = new FormData();
    formData.append("categoryid", categoryId);
    formData.append("subcategoryname", subcategoryName);
    formData.append("subcategoryicon", subcategoryIcon.bytes);
    formData.append("createat", currentDate());
    formData.append("updateat", currentDate());
    formData.append("adminid", "420");

    var result = await postData("subcategory/subcategory_submit", formData);
    if (result.status) {
      Swal.fire({
        //position: "top-end",
        icon: "success",
        title: result.message,
        showConfirmButton: false,
        timer: 2000,
        toast: false,
      });
    } else {
      Swal.fire({
        //  position: "top-end",
        icon: "error",
        title: result.message,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
    }
    setLoadingStatus(false);
    resetValue();
  };

  const handleReset = () => {
    resetValue();
  };

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <div className={classes.mainHeadingstyle}>
              <img src={logo} className={classes.imageStyle} />

              <div className={classes.headingStyle}>SUB Category Register</div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Categoryname </InputLabel>
              <Select
                value={categoryId}
                label="categorY NAME"
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {fillCategory()}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              onFocus={() => handleErrorMessages("subcategoryName", "")}
              error={errorMessages?.subcategoryName}
              helperText={errorMessages?.subcategoryName}
              onChange={(e) => setsubCategoryName(e.target.value)}
              label="SubCategory Name"
              value={subcategoryName}
              fullWidth
            />
          </Grid>
          <Grid item xs={6} className={classes.center}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button variant="contained" component="label">
                Upload
                <input
                  onChange={handleImageChange}
                  hidden
                  type="file"
                  accept="image/*"
                  multiple
                />
              </Button>
              {/* <div className={classes.errorMessageStyle}>{errorMessages?.categoryIcon!=null?errorMessages?.categoryIcon:<></>}</div> */}
            </div>
          </Grid>
          <Grid item xs={6} className={classes.center}>
            <Avatar
              src={subcategoryIcon.fileName}
              style={{ width: 70, height: 70 }}
              variant="rounded"
            />
          </Grid>
          <Grid item xs={6} className={classes.center}>
            <LoadingButton
              loading={loadingStatus}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="contained"
              onClick={handleSubmit}
            >
              Save
            </LoadingButton>

            {/* <Button variant="contained" onClick={handleSubmit}  >submit</Button> */}
          </Grid>

          <Grid item xs={6} className={classes.center}>
            <Button variant="contained" onClick={handleReset}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
