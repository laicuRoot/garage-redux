import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div className="card-product">
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" alt="placeholder" />
            <div className="card-product-infos">
              <h2>{car.brand} {car.model}</h2>
              <p>Owner: <strong>{car.owner}</strong></p>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    const style = {
      backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/background.png)"
    };

    return (
      <div className="container main-container">
        <div className="row box">
          <div className="col-sm-4">
            <div className="banner" style={style}>
              <div className="banner-container">
                <h1>Add your car to  <strong>LaicuRoot Garage</strong>!</h1>
                <p>Change your life and keep track of your cars</p>
                <div className='flex-container'>
                  <Link className="btn btn-flat" to="/cars/new">
                    <span>Lets add a car!</span>
                  </Link>
                </div>
              </div>
            </div>
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

