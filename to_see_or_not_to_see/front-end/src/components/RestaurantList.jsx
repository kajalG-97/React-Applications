import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantData } from "../redux/restaurant/RestaurantAction";
import { RestaurantCard } from "./RestaurantCard";
import { SortAndFilterButtons } from "./SortAndFilter";

export const RestaurantList = () => {
    const { restaurant,loding,error } = useSelector((store) => store.restaurant);
    console.log('restaurant', restaurant);
    const { isAuthenticated } = useSelector((store) => store.auth);

    const [sort, setSort] = useState("asc");
    const [costForTwo, setCostForTwo] = useState("");
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(getRestaurantData(sort));
    }

    useEffect(() => {
        fetchData();
    }, [sort]);

    if (!isAuthenticated) {
        return <Navigate to={"/login"} />
    }

    const sorting = (e) => {
        if (e.target.id === "sortByAsc") {
            setSort("asc");
        } if (e.target.id === "sortByDesc") {
            setSort("desc");
        }
    }

    return loding ? <img src="https://www.fugusau.edu.ng/wp-content/uploads/2021/01/Bubble-Preloader-1-1.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong"/>:(
        <div >
            <SortAndFilterButtons handleSort={sorting} />
            <div style={{display: 'flex', flexWrap: 'wrap',gap:"30px",margin:"auto",width:"90%",marginTop:"30px"}}>
                {restaurant && restaurant.map((e) => {

                    return <RestaurantCard e={e} key={e.id} />
                })}
            </div>
        </div>
    )
}