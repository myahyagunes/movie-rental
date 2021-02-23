import React from "react";

const Dropdown = ({ name, label, error, items, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select name={name} id={name} {...rest} className="form-select">
        <option value=""></option>
        {items.map((item) => (
          <option key={item._id} id={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Dropdown;
