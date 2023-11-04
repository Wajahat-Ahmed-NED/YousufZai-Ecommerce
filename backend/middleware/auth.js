const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(req.cookies);
  // if (!token) {
  //   return next(new ErrorHander("Please Login to access this resource", 401));
  // }

  // const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById("65342a9728d7d94e4c7879ab");

  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    console.log(roles);
    console.log(req.user.role);
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
