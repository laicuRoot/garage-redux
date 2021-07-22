import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

const required = value => value ? undefined : 'Required';
const plate = value => value && !/^[A-Z0-9.]/i.test(value) ? 'Invalid plate' : undefined;

class CarsNew extends Component {

  onSubmit = (values) => {
    this.props.createCar(values, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }


  renderField({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          className="form-control"
          type={type}
          {...input}
        />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    )
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          label="Brand"
          name="brand"
          type="text"
          component={this.renderField}
          validate={[required]}
        />
        <Field
          label="Model"
          name="model"
          type="text"
          component={this.renderField}
          validate={[required]}
        />
        <Field
          label="Owner"
          name="owner"
          type="text"
          component={this.renderField}
          validate={[required]}
        />
        <Field
          label="Plate"
          name="plate"
          type="text"
          component={this.renderField}
          validate={[required, plate]}
        />

        <button
          className="btn-flat"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Add Car
        </button>
      </form>
    );
  }
}


export default reduxForm({ form: 'newCarForm' })(
  connect(null, { createCar })(CarsNew)
);
