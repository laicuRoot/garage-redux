import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCar, deleteCar } from '../actions/index';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  handleClick = () => {
    this.props.deleteCar(this.props.history, this.props.car);
  }

  // deleteOnClick(e) {
  //   e.preventDefault();
  //   this.props.deleteCar(this.props.match.params.id);
  // }

  renderCar() {
    return (
      <div className="card-product">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" alt="placeholder" />
        <div className="card-product-infos">
          <h2> {this.props.car.model}</h2>
          <p>Owner: <strong>{this.props.car.owner}</strong></p>
          <button onClick={this.handleClick}>
            Delete
          </button>
        </div>
      </div>
    );
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
            {this.renderCar()}
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  // From URL
  const car = state.cars.find(car => car.id === idFromUrl);
  console.log(state.cars)
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
