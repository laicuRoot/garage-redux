import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <div className="card-product">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" alt="placeholder" />
          <div className="card-product-infos">
            <h2>{car.brand} {car.model}</h2>
            <p>Owner: <strong>{car.owner}</strong></p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container main-container">
        <div className="row box">
          <div className="col-sm-4">
            Placeholder
          </div>
          <div className="col-sm-8">
            {this.renderCars()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.cars };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);

