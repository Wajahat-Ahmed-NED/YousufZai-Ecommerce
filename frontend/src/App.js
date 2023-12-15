import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";

import DashboardS from "./component/Trainee/Dashboard.js";
import ProductListS from "./component/Trainee/ProductList.js";
import NewProductS from "./component/Trainee/NewProduct";
import UpdateProductS from "./component/Trainee/UpdateProduct";
import OrderListS from "./component/Trainee/OrderList";
import ProcessOrderS from "./component/Trainee/ProcessOrder";
import UsersListS from "./component/Trainee/UsersList";
import UpdateUserS from "./component/Trainee/UpdateUser";
import ProductReviewsS from "./component/Trainee/ProductReviews";

import DashboardT from "./component/Trainer/Dashboard.js";
import ProductListT from "./component/Trainer/ProductList.js";
import NewProductT from "./component/Trainer/NewProduct";
import UpdateProductT from "./component/Trainer/UpdateProduct";
import OrderListT from "./component/Trainer/OrderList";
import ProcessOrderT from "./component/Trainer/ProcessOrder";
import UsersListT from "./component/Trainer/UsersList";
import UpdateUserT from "./component/Trainer/UpdateUser";
import ProductReviewsT from "./component/Trainer/ProductReviews";

import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";

import NewQuizT from "./component/Trainer/NewQuiz.js";
import UpdateQuizT from "./component/Trainer/UpdateQuiz.js";
import NewContentT from "./component/Trainer/NewContent.js";
import UpdateContentT from "./component/Trainer/UpdateContent.js";

import NewQuizS from "./component/Trainee/NewQuiz.js";
import UpdateQuizS from "./component/Trainee/UpdateQuiz.js";
import NewContentS from "./component/Trainee/NewContent.js";
import UpdateContentS from "./component/Trainee/UpdateContent.js";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get(
      "https://yousuf-zai-ecommerce-api.vercel.app/api/v1/stripeapikey"
    );
    console.log(data);
    // setStripeApiKey(data.stripeApiKey);
    setStripeApiKey("data.stripeApiKey");
  }
  console.log(stripeApiKey);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    // store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <Route exact path="/login" component={LoginSignUp} />

        <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
        {/* trainer routes */}
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/trainer/dashboard"
          component={DashboardT}
        />
        <ProtectedRoute
          exact
          path="/trainer/products"
          isAdmin={true}
          component={ProductListT}
        />
        <ProtectedRoute
          exact
          path="/trainer/product"
          isAdmin={true}
          component={NewProductT}
        />
        <ProtectedRoute
          exact
          path="/trainer/quiz"
          isAdmin={true}
          component={NewQuizT}
        />
        <ProtectedRoute
          exact
          path="/trainer/content"
          isAdmin={true}
          component={NewContentT}
        />
        <ProtectedRoute
          exact
          path="/trainer/content/:id"
          isAdmin={true}
          component={UpdateContentT}
        />
        <ProtectedRoute
          exact
          path="/trainer/quiz/:id"
          isAdmin={true}
          component={UpdateQuizT}
        />

        <ProtectedRoute
          exact
          path="/trainer/product/:id"
          isAdmin={true}
          component={UpdateProductT}
        />
        <ProtectedRoute
          exact
          path="/trainer/orders"
          isAdmin={true}
          component={OrderListT}
        />

        <ProtectedRoute
          exact
          path="/trainer/order/:id"
          isAdmin={true}
          component={ProcessOrderT}
        />
        <ProtectedRoute
          exact
          path="/trainer/users"
          isAdmin={true}
          component={UsersListT}
        />

        <ProtectedRoute
          exact
          path="/trainer/user/:id"
          isAdmin={true}
          component={UpdateUserT}
        />

        <ProtectedRoute
          exact
          path="/trainer/reviews"
          isAdmin={true}
          component={ProductReviewsT}
        />

        {/* trainee routes */}
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/trainee/dashboard"
          component={DashboardS}
        />
        <ProtectedRoute
          exact
          path="/trainee/products"
          isAdmin={true}
          component={ProductListS}
        />
        <ProtectedRoute
          exact
          path="/trainee/product"
          isAdmin={true}
          component={NewProductS}
        />
        <ProtectedRoute
          exact
          path="/trainee/quiz"
          isAdmin={true}
          component={NewQuizS}
        />
        <ProtectedRoute
          exact
          path="/trainee/content"
          isAdmin={true}
          component={NewContentS}
        />
        <ProtectedRoute
          exact
          path="/trainee/content/:id"
          isAdmin={true}
          component={UpdateContentS}
        />
        <ProtectedRoute
          exact
          path="/trainee/quiz/:id"
          isAdmin={true}
          component={UpdateQuizS}
        />

        <ProtectedRoute
          exact
          path="/trainee/product/:id"
          isAdmin={true}
          component={UpdateProductS}
        />
        <ProtectedRoute
          exact
          path="/trainee/orders"
          isAdmin={true}
          component={OrderListS}
        />

        <ProtectedRoute
          exact
          path="/trainee/order/:id"
          isAdmin={true}
          component={ProcessOrderS}
        />
        <ProtectedRoute
          exact
          path="/trainee/users"
          isAdmin={true}
          component={UsersListS}
        />

        <ProtectedRoute
          exact
          path="/trainee/user/:id"
          isAdmin={true}
          component={UpdateUserS}
        />

        <ProtectedRoute
          exact
          path="/trainee/reviews"
          isAdmin={true}
          component={ProductReviewsS}
        />

        {/* admin routes */}
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />

        <Route
          path="/process/payment"
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
