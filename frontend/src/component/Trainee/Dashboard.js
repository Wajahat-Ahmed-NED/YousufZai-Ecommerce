import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction.js";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData.js";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Progress", "Progress"],
    datasets: [
      {
        label: "Course 1",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 21],
      },
      {
        label: "Course 2",
        backgroundColor: ["red"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 90],
      },
      {
        label: "Course 3",
        backgroundColor: ["blue"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 83],
      },
      {
        label: "Course 4",
        backgroundColor: ["yellow"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 67],
      },
      {
        label: "Course 5",
        backgroundColor: ["green"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, 100],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products?.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Trainee Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1" style={{ fontWeight: "bold" }}>
          Trainee Dashboard
        </Typography>

        <hr />
        <div className="dashboardSummary">
          <div>
            <p>
              Course Completion Rate <br /> 66.3%
              {/* {totalAmount} */}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/trainee/products">
              <p>Courses Enrolled</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/trainee/products">
              <p>Courses Completed</p>
              <p>5</p>
              {/* {orders && orders.length} */}
            </Link>
            {/* <Link to="/trainee/users"> */}
            <Link to="/trainee/orders">
              <p>Pending Quizes</p>
              <p>4</p>
            </Link>
            {/* <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link> */}
          </div>
        </div>

        <Typography component="h1" style={{ fontWeight: "bold" }}>
          Course Wise Progress Rate
        </Typography>
        <div className="lineChart">
          <Line data={lineState} />
        </div>

        {/* <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
