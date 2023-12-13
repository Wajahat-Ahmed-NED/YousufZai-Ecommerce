import React, { Fragment, useEffect, useState } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
// import  from "@mui/material/Card";
// import  from "@mui/material/CardHeader";
// import  from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
import {
  Avatar,
  CardContent,
  Card,
  CardHeader,
  Typography,
} from "@material-ui/core";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [pop, setPop] = useState([]);

  useEffect(() => {
    setPop(products.filter((e) => e.ratings >= 4));
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Get My Trainer</p>
            <h1>FIND THE BEST COURSES IN AFFORDABLE PRICE</h1>

            <a href="#container">
              <button>GET NOW</button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Courses</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <h2 className="homeHeading">Popular Courses</h2>

          <div className="container" id="container">
            {pop &&
              pop.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <h2 className="homeHeading">Testimonials</h2>

          <div className="container" id="container">
            {/* {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))} */}
            <div
              style={{
                marginLeft: "10%",
                marginRight: "10%",
                display: "flex",
                justifyContent: "between",
              }}
            >
              <Card
                sx={{ maxWidth: 85 }}
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{ maxWidth: 85 }}
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
              <Card
                sx={{ maxWidth: 85 }}
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
