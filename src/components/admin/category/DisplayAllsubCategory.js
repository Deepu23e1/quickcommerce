import { useState, useEffect, createDate } from "react";

import MaterialTable from "@material-table/core";
import { userStyle } from "./CategoryCss";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import Swal from "sweetalert2";
import cart from "../../../asset/cart.png";
import logo from "../../../asset/logo.png.png";
import {
  currentDate,
  postData,
  getData,
  serverURL,
} from "../../../services/FetchNodeAdminServices";
import {
  Button,
  Grid,
  TextField,
  Avatar,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Routes,Route,useNavigate } from 'react-router-dom';

/**
 * This function is responsible for displaying all subcategories in a MaterialTable.
 * It fetches the subcategories from the server using the getData function and updates the subcategoryList state.
 * The subcategoryTable function generates the MaterialTable component with the fetched data.
 *
 * @returns {JSX.Element} - A JSX element containing the MaterialTable component for displaying subcategories.
 */
export default function DisplayAllsubCategory() {
  const navigate = useNavigate()
  const classes = userStyle();
  const [subCategoryList, setsubCategoryList] = useState([]);
  const [open, setOpen] = useState(false);

  /*********************** */

  const [categoryId, setCategoryId] = useState("");
  const [subCategoryName, setsubCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [hideUploadButton, setHideUploadButton] = useState(false);
  const [subcategoryIcon, setsubCategoryIcon] = useState({
    bytes: "",
    fileName: cart,
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [subCategoryData, setSubCategoryData] = useState({});
  // const [CategoryIData, setCategoryIData] = useState({});
  const [subCategoryId, setsubCategoryId] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(false);

  const handleErrorMessages = (label, message) => {
    var msg = errorMessages;
    msg[label] = message;
    setErrorMessages((prev) => ({ ...prev, ...msg }));
  };

  const showSaveCancelButton = () => {
    return (
      <div>
        <Button onClick={handleEditIcon}>Save</Button>
        <Button>Cancel</Button>
      </div>
    );
  };

  const validateData = () => {
    var err = false;
    if (subCategoryName.length == 0) {
      handleErrorMessages("categoryName", "Pls input categoryname..");
      err = true;
    }
    // if (subcategoryIcon.bytes.length == 0) {
    //   handleErrorMessages("subcategoryIcon", "Pls select category icon..");
    //   err = true;
    // }
    return err;
  };

  const handleImageChange = (e) => {
    setsubCategoryIcon({
      bytes: e.target.files[0],
      fileName: URL.createObjectURL(e.target.files[0]),
    });
    setHideUploadButton(true);
  };

 /////////////





 







  /*********************** */

  const handleEditData = async () => {
    var err = validateData();
    if (err == false) {
      setLoadingStatus(true);
      var body = {
        subcategoryname: subCategoryName,
        updateat: currentDate(),
        adminid: "321",
        categoryid: categoryId,
        subcategoryid: subCategoryId,
      };

      var result = await postData("subcategory/edit_subcategory_data", body);
      if (result.status) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: result.message,
          showConfirmButton: false,
          timer: 2000,
          toast: true,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: result.message,
          showConfirmButton: false,
          timer: 2000,
          toast: true,
        });
      }
      setLoadingStatus(false);
      setHideUploadButton(false);
    }
    fetchAllCategory();
  };
  const subCategoryForm = () => {
    return (
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <div className={classes.mainHeadingstyle}>
            <img src={logo} className={classes.imageStyle} />

            <div className={classes.headingStyle}>SUB Category Register</div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={categoryId}
            onFocus={() => handleErrorMessages("categoryId", "")}
            error={errorMessages?.categoryId}
            helperText={errorMessages?.categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            label="Category ID"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={subCategoryName}
            onFocus={() => handleErrorMessages("subcategoryName", "")}
            error={errorMessages?.subcategoryName}
            helperText={errorMessages?.subcategoryName}
            onChange={(e) => setsubCategoryName(e.target.value)}
            label="SubCategory Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} className={classes.center}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {hideUploadButton ? (
              <div>{showSaveCancelButton()}</div>
            ) : (
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
            )}
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
            onClick={handleEditData}
           // onClick={handleEditIcon}
          >
            Edit
          </LoadingButton>

          {/* <Button variant="contained" onClick={handleSubmit}  >submit</Button> */}
        </Grid>

        <Grid item xs={6} className={classes.center}>
          <Button onClick={handleDeletesubCategory} variant="contained">
            delete
          </Button>
        </Grid>
      </Grid>
    );
  };
  const handleEditIcon = async () => {
    setLoadingStatus(true);
    var formData = new FormData();
    formData.append("subcategoryicon", subcategoryIcon.bytes);
    formData.append("updateat", currentDate());
    formData.append("adminid", "321");
    formData.append("subcategoryid", subCategoryId);

    var result = await postData("subcategory/edit_subcategory_icon", formData);
    if (result.status) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: result.message,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: result.message,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
    }
    setLoadingStatus(false);
    setHideUploadButton(false);

    fetchAllCategory();
  };

  /************** */

  const handleDeletesubCategory = async () => {
    Swal.fire({
      title: "Do you want to delete the subcategory?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        subcategoryDelete();
      } else if (result.isDenied) {
        Swal.fire("subCategory not deleted", "", "info");
      }
    });

    setLoadingStatus(true);
    var body = {
      subcategoryid: subCategoryId,
    };

    var result = await postData("subcategory/delete_subcategory", body);
    if (result.status) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: result.message,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: result.message,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
    }
    setLoadingStatus(false);
    setHideUploadButton(false);

    fetchAllCategory();
  };

  const subcategoryDelete = async () => {
    setLoadingStatus(true);
    var body = {
      subcategoryid: subCategoryId,
    };

    var result = await postData("subcategory/delete_subcategory", body);
    if (result.status) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: result.message,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: result.message,
        showConfirmButton: false,
        timer: 2000,
        toast: true,
      });
    }
    setLoadingStatus(false);
    setHideUploadButton(false);

    fetchAllCategory();
  };

  /***************** */

  /**
   * Fetches all subcategories from the server and updates the subcategoryList state.
   * idhar humne apni subcategory list set kari hai fetch all naam ka arrow function bna k
   */

  const fetchAllCategory = async () => {
    var result = await getData("subcategory/display_all_subcategory");
    if (result.status) {
      setsubCategoryList(result.data);
    } else {
      alert(result.message);
    }
  };

  /**
   * useEffect ek hook hai iski madat se humne apne pura data ko call kr liya.
   */
  useEffect(function () {
    fetchAllCategory();
  }, []);

  const handleOpenDialog = (rowData) => {
    setCategoryId(rowData.categoryid);
    setsubCategoryId(rowData.subcategoryid);
    setsubCategoryName(rowData.subcategoryname);
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const showsubCategoryDialog = () => {
    return (
      <div>
        <Dialog open={open}>
          <DialogContent>{subCategoryForm()}</DialogContent>

          <DialogActions>
            <button onClick={handleCloseDialog}> close</button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  /**
   * Generates the MaterialTable component with the fetched subcategory data.
   * abh fetchAllCategory se jo call karaya gya data hai usko show kara liya by table
   *
   * @returns {JSX.Element} - A JSX element containing the MaterialTable component.
   */
  function subcategoryTable() {
    return (
      <div className={classes.root}>
        <div className={classes.displayBox}>
          <MaterialTable
            title="subCategory List"
            columns={[
              { title: "Category Name", field: "categoryname" },
              { title: " SUBCategory ID", field: "subcategoryid" },
              { title: " SUBCategory Name", field: "subcategoryname" },
              //   { title: 'Created At', render:(rowData)=><div style={{display:'flex',flexDirection:'column'}}><div>{createDate(rowData.created_at)}</div><div>{createDate(rowData.updated_at)}</div></div>},
              {
                title: "CREATE",
                render: (rowData) => (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {" "}
                    <div>{rowData.createat}</div>
                    <div>{rowData.updateat}</div>
                  </div>
                ),
              },
              //  { title: 'UPDATE', field: 'updateat'},
              { title: "Admin", field: "adminid" },
              {
                title: "Icon",
                render: (rowData) => (
                  <div>
                    {" "}
                    <img
                      src={`${serverURL}/images/${rowData.subcategoryicon}`}
                      style={{ width: 60, height: 60, borderRadius: 6 }}
                    />
                  </div>
                ),
              },
              //   { title: 'Icon', render:(rowData)=><div><img src={`${serverURL}/images/${rowData.categoryicon}`}  style={{width:60,height:60,borderRadius:6}}/></div>},
            ]}
            data={subCategoryList}
            options={{
              pageSize: 3,
              //   pageSizeOptions: [3, 5, 10,{ value: categoryList.length, label: 'All' }],
            }}
            actions={[
              {
                icon: "edit",
                tooltip: "Edit Category",
                onClick: (event, rowData) => handleOpenDialog(rowData),
              },
         
              {
                icon: 'add',
                tooltip: 'Add User',
                isFreeAction: true,
                onClick: (event) => navigate('/dashboard/subcategory')
              }
            ]}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      {subcategoryTable()}
      {showsubCategoryDialog()}
    </div>
  );
}
