import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import {
  deleteOrder,
  getAllOrders,
  clearErrors,
} from "../../actions/orderAction";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";

const OrderList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, orders } = useSelector((state) => state.allOrders);

  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
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
      alert.success("Order Deleted Successfully");
      history.push("/trainer/orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Quiz ID", minWidth: 50, flex: 0.5 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 50,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Active"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "quizname",
      headerName: "Quiz Name",
      minWidth: 250,
      flex: 0.4,
    },
    {
      field: "coursename",
      headerName: "Course Name",
      minWidth: 250,
      flex: 0.4,
    },

    {
      field: "responses",
      headerName: "Responses",
      type: "number",
      minWidth: 70,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 50,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/trainer/quiz/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [
    {
      id: 11231231,
      responses: 23,
      quizname: "Web Dev HTML",
      coursename: "Web Dev",
      status: "Active",
    },
    {
      id: 12331231,
      responses: 23,
      quizname: "Mobile Dev HTML",
      coursename: "Mobile Dev",
      status: "Active",
    },
    {
      id: 11231232,
      responses: 23,
      quizname: "Python",
      coursename: "Generative AI",
      status: "InActive",
    },
  ];

  orders &&
    orders.forEach((item) => {
      rows.push({
        id: item._id,
        responses: item.orderItems.length,
        quizname: "Web Dev HTML",
        coursename: "Web Dev",
        status: "Active",
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL Quizes - Admin`} />
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">All Quizes</h1>
          <hr />
          <br />
          <Link to="/trainer/quiz" style={{ marginLeft: "2%" }}>
            <Button variant="outlined">Create New Quiz</Button>
          </Link>
          <br />
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default OrderList;
