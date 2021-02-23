import React, { Component } from "react";
import Joi from "joi";
import Input from "./input";
import Dropdown from "./dropdown";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const result = Joi.object(this.schema).validate(this.state.data, {
      abortEarly: false,
    });

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = {
      [name]: this.schema[name],
    };
    const { error } = Joi.object(schema).validate(obj);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderButton(label, onClick) {
    return (
      <button
        disabled={this.validate()}
        className="btn btn-primary btn-sm"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  renderInput(iName, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={iName}
        value={data[iName]}
        label={label}
        onChange={this.handleChange}
        error={errors[iName]}
      />
    );
  }

  renderDropdown(name, label, items) {
    const { data, errors } = this.state;
    return (
      <Dropdown
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        label={label}
        error={errors[name]}
        items={items}
      />
    );
  }
}

export default Form;
