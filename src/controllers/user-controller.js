const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function register(req, res) {
  try {
    const user = await UserService.register({
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = user;
    return res.status(201).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function login(req, res) {
  try {
    const user = await UserService.login({
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = user;
    return res.status(200).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function isAuthenticated(req, res) {
  try {
    const token = await UserService.isAuthenticated({
      token: req.body.token,
    });
    SuccessResponse.data = token;
    return res.status(201).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  register,
  login,
  isAuthenticated,
};
