import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantData } from "../redux/restaurant/RestaurantAction";
import { RestaurantCard } from "./RestaurantCard";

export const RestaurantList = () => {
    const { restaurant } = useSelector((store) => store.restaurant);

    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(getRestaurantData());
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {restaurant && restaurant.map((e) => {
                
               return <RestaurantCard e={e} key={e.id} />
            })}
        </div>
    )
}