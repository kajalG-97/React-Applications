import { GET_RESTAURANT_ERROR, GET_RESTAURANT, GET_RESTAURANT_LODING } from "./RestaurantAction";
const initialState = {
    loding: false,
    restaurant: [],
    error: false,
}
export const restaurantReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case GET_RESTAURANT_LODING: return {
            ...store,
            loding: true
        };
        case GET_RESTAURANT: return { restaurant: payload, loading: false, error: false };

        case GET_RESTAURANT_ERROR: return { ...store, loding: false, error: true }

        default: return { store }
    }
}