import Joi from "joi";
import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username is required."),
    password: Joi.string().required().label("Password is required."),
  };

  doSubmit = () => {
    // Call the server

    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h4>Login</h4>

        <form onSubmit={this.handleSubmit}>
          <div className="col-6">
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
