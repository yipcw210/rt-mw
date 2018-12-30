import { Component } from "react";
import Joi from "joi-browser";

class Form extends Component {
  updateError(info, infoError) {
    for (let key in info) {
      const error = this.validateProperty(key, info[key]);
      if (info[key] && infoError[key + "Error"] !== error) {
        this.props[`update${key.charAt(0).toUpperCase() + key.slice(1)}Error`](
          error
        );
      }
    }
  }

  validateForm = info => {
    for (let key in info) {
      const error = this.validateProperty(key, info[key]);

      this.props[`update${key.charAt(0).toUpperCase() + key.slice(1)}Error`](
        error
      );
    }
  };

  hasError = error => {
    for (let key in error) {
      if (error[key]) return true;
    }
    return false;
  };

  validateProperty = (name, value) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : "";
  };

  handleAccountChange = event => {
    const key = event.target.id;
    const newValue = event.target.value;
    console.log(newValue);
    this.props[`update${key.charAt(0).toUpperCase() + key.slice(1)}`](newValue);
  };
}

export default Form;
