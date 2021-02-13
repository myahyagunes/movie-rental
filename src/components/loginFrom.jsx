import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h4>Login</h4>

        <form onSubmit={this.handleSubmit}>
          <div className="col-6">
            <div className=" mb-3">
              <label htmlFor="username" className="form-label">
                UserName
              </label>
              <input
                onChange={this.handleChange}
                value={account.username}
                name="username"
                type="text"
                className="form-control"
                id="username"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                onChange={this.handleChange}
                value={account.password}
                name="password"
                type="text"
                className="form-control"
                id="password"
                placeholder="name@example.com"
              />
            </div>
            <button className="btn btn-primary btn-sm">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
