import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    // Call the server

    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h4>Register</h4>

        <form onSubmit={this.handleSubmit}>
          <div className="col-6">
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderInput("name", "Name")}
            {this.renderButton("RegisterForm")}
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
