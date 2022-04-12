import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantData } from "../redux/restaurant/RestaurantAction";
import { RestaurantCard } from "./RestaurantCard";
import { SortAndFilterButtons } from "./SortAndFilter";

export const RestaurantList = () => {
    const { restaurant } = useSelector((store) => store.restaurant);
    console.log('restaurant', restaurant);
    const [sort, setSort] = useState("asc");
    const [costForTwo, setCostForTwo] = useState("");
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(getRestaurantData(sort));
    }

    useEffect(() => {
        fetchData();
    }, [sort]);

    const sorting = (e) => {
        if (e.target.id === "sortByAsc") {
            setSort("asc");
        } if (e.target.id === "sortByDesc") {
            setSort("desc");
        }
    }

    return (
        <div>
            <SortAndFilterButtons handleSort={sorting} />
            {restaurant && restaurant.map((e) => {

                return <RestaurantCard e={e} key={e.id} />
            })}
        </div>
    )
}