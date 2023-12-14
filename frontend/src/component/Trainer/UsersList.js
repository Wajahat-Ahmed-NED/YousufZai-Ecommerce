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
import { getAllUsers, clearErrors, deleteUser } from "../../actions/userAction";
import { DELETE_USER_RESET } from "../../constants/userConstants";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ExamplePDF from "./ExamplePDF.pdf";
import Test from "./test.mkv";

const UsersList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, users } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
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
      alert.success(message);
      history.push("/admin/users");
      dispatch({ type: DELETE_USER_RESET });
    }

    dispatch(getAllUsers());
  }, [dispatch, alert, error, deleteError, history, isDeleted, message]);

  const columns = [
    { field: "id", headerName: "Content ID", minWidth: 180, flex: 0.8 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "desc",
      headerName: "Description",
      minWidth: 200,
      flex: 1,
    },

    {
      field: "type",
      headerName: "Type",

      minWidth: 150,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "type") === "Video"
          ? "greenColor"
          : "redColor";
      },
    },

    {
      field: "cvname",
      headerName: "Course/Video Name",
      minWidth: 200,
      flex: 1,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/content/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
            &nbsp;
            <Link
              to={Test}
              // download="Example-PDF-document"
              target="_blank"
              rel="noreferrer"
            >
              <VisibilityIcon />
            </Link>
            <Button
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, "id"))
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
      id: 1,
      cvname: "Web Dev",
      type: "Video",
      desc: "adfasdfasd",
      name: "Testing",
    },
    {
      id: 2,
      cvname: "AI Dev",
      type: "File",
      desc: "adfasdfasd",
      name: "Testing",
    },
    {
      id: 3,
      cvname: "Cyber Security",
      type: "Video",
      desc: "adfasdfasd",
      name: "Testing",
    },
  ];

  // users &&
  //   users.forEach((item) => {
  //     rows.push({
  //       id: item._id,
  //       role: item.role === "admin" ? "Trainer" : "Trainee",
  //       email: item.email,
  //       name: item.name,
  //       status: item.role === "admin" ? "Approved" : "Rejected",
  //     });
  //   });

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL USERS</h1>
          <hr />
          <br />

          {/* <hr /> */}
          <Link to="/admin/content" style={{ marginLeft: "2%" }}>
            <Button variant="outlined">Add New Content</Button>
          </Link>
          <br />
          {/* <hr /> */}
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

export default UsersList;
