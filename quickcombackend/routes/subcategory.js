var express = require("express");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

/* GET home page. */
router.post(
  "/subcategory_submit",
  upload.single("subcategoryicon"),
  function (req, res, next) {
    try {
      pool.query(
        "insert into subcategory(categoryid,subcategoryname,subcategoryicon,createat,updateat,adminid) values(?,?,?,?,?,?)",
        [
          req.body.categoryid,
          req.body.subcategoryname,
          req.file.filename,
          req.body.createat,
          req.body.updateat,
          req.body.adminid,
        ],
        function (error, result) {
          console.log(error);
          if (error) {
            res.status(200).json({
              message: "Database Error contact backendteam",
              status: false,
            });
          } else {
            res
              .status(200)
              .json({ message: "submitted successfully", status: true });
          }
        }
      );
    } catch (error) {
      console.log(error);
      res.status(200).json({ message: "severe error found", status: false });
    }
  }
);

router.get("/display_all_subcategory", function (req, res, next) {
  try {
    pool.query("select SC.*,(select C.categoryname from category C where C.categoryid=SC.categoryid) as categoryname from subcategory SC", function (error, result) {
      console.log(error);
      if (error) {
        res.status(200).json({
          message: "Database Error contact backendteam",
          status: false,
        });
      } else {
        res.status(200).json({
          message: "submitted successfully",
          data: result,
          status: true,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "severe error found", status: false });
  }
});

router.post("/edit_subcategory_data", function (req, res, next) {
  console.log("BODY", req.body);
  try {
    pool.query(
      "update subcategory set subcategoryname=?,categoryid=?,updateat=?,adminid=? where subcategoryid=?",
      [
        req.body.subcategoryname,
        req.body.categoryid,
        req.body.updateat,
        req.body.adminid,
        req.body.subcategoryid,
      ],
      function (error, result) {
        if (error) {
          console.log("BODY", req.body);
          res.status(500).json({
            message: "Database Error Pls contact with backend team...",
            status: false,
          });
        } else {
          res
            .status(200)
            .json({ message: "Category updated successfully", status: true });
        }
      }
    );
  } catch (e) {
    console.log(e);
    res.status(200).json({
      message: "Severe error on server pls contact with backend team",
      status: false,
    });
  }
});

router.post(
  "/edit_subcategory_icon",
  upload.single("subcategoryicon"),
  function (req, res, next) {
    try {
      pool.query(
        "update subcategory set subcategoryicon=?,updateat=?,adminid=? where subcategoryid=?",
        [
          req.file.filename,
          req.body.updateat,
          req.body.adminid,
          req.body.subcategoryid,
        ],
        function (error, result) {
          if (error) {
            console.log(body);
            res.status(200).json({
              message: "Database Error Pls contact with backend team...",
              status: false,
            });
          } else {
            res
              .status(200)
              .json({ message: "Image updated successfully", status: true });
          }
        }
      );
    } catch (e) {
      res.status(200).json({
        message: "Severe error on server pls contact with backend team",
        status: false,
      });
    }
  }
);

router.post("/delete_subcategory", function (req, res, next) {
  try {
    pool.query(
      "delete  from subcategory  where subcategoryid=?",
      [req.body.subcategoryid],
      function (error, result) {
        if (error) {
          console.log(error);
          res.status(200).json({
            message: "Database Error Pls contact with backend team...",
            status: false,
          });
        } else {
          res
            .status(200)
            .json({ message: "Category deleted successfully", status: true });
        }
      }
    );
  } catch (e) {
    res.status(200).json({
      message: "Severe error on server pls contact with backend team",
      status: false,
    });
  }
});


router.get("/display_all_Brands_bycategoryid", function (req, res, next) {
  try {
    pool.query(
      `SELECT B.*, (SELECT C.categoryname FROM subcategory C WHERE C.subcategoryid = B.subcategoryid) AS subcategoryname FROM brands B`,
      function (error, result) {
        console.log(error);
        if (error) {
          console.log(error);
          res.status(200).json({
            message: "Database Error contact backend team",
            status: false,
          });
        } else {
          res.status(200).json({
            message: "Submitted successfully",
            data: result,
            status: true,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Severe error found", status: false });
  }
});

router.post("/display_all_subcategorylist", function(req, res) {
 try{
  pool.query("SELECT * FROM subcategory WHERE categoryid = ?", [req.body.categoryid], function(error, result) {
    if (error) {
      res.status(500).json({
        message: "Database Error contact backend team",
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Submitted successfully",
        data: result,
        status: true,
      });
    }
  });
} catch (err) {
  res.status(500).json({
    message: "Server Error",
    status: false,
  });
}
});




module.exports = router;
