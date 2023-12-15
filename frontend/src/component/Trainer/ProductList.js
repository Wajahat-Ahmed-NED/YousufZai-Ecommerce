import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from "../../actions/productAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

const ProductList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, products } = useSelector((state) => state.products);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Product Deleted Successfully");
      history.push("/trainer/dashboard");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Course ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Course Name",
      minWidth: 250,
      flex: 1,
      align: "left",
    },

    {
      field: "price",
      headerName: "Price (PKR)",

      minWidth: 270,
      flex: 1,
    },
    {
      field: "purchases",
      headerName: "Purchases",
      minWidth: 150,
      flex: 1,
      align: "left",
    },
    {
      field: "revenue",
      headerName: "Revenue",
      minWidth: 150,
      flex: 1,
      align: "left",
    },
    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/trainer/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        price: item.price,
        name: item.name,
        purchases: 21,
        revenue: `Rs ${item.price * 21}`,
      });
    });

  return (
    <Fragment>
      <MetaData title={`My Courses - Trainer`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">My Courses</h1>
          <hr />
          <br />

          <Link to="/trainer/product" style={{ marginLeft: "2%" }}>
            <Button variant="outlined">Create New Course</Button>
          </Link>
          <br />
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
            // style={{ marginLeft: "5%", marginRight: "5%" }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;
