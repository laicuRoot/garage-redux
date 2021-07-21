// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';

export function fetchCars() {
  const promise = fetch('https://wagon-garage-api.herokuapp.com/laicuroot/cars')
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}
