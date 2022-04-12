import axios from "axios";

export const GET_RESTAURANT_LODING = 'GET_RESTAURANT_LODING';

export const GET_RESTAURANT = 'GET_RESTAURANT';

export const GET_RESTAURANT_ERROR = 'GET_RESTAURANT_ERROR';

export const getRestaurant = (payload) => ({ type: GET_RESTAURANT, payload });

export const getRestaurantLoding = () => ({ type: GET_RESTAURANT_LODING });

export const getRestaurantError = () => ({ type: GET_RESTAURANT_ERROR });

export const getRestaurantData = (sort) => (dispatch) => {

    dispatch(getRestaurantLoding());

    axios.get(`http://localhost:8800/restaurant?_sort=costForTwo&_order=${sort}`)
        .then(({ data }) => dispatch(getRestaurant(data)))
        .catch((err) => dispatch(getRestaurantError()));
}