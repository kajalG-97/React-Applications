import axios from "axios"
import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { SortAndFilterButtons } from "./SortAndFilterButton";

export const RestaurantList = () => {
    const [data, setData] = useState([]);
    const [rating, setRating] = useState(0);
    const [costForTwo, setCostForTwo] = useState(0);
    const [card, setCard] = useState(true);
    const [cash,setCash] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getdata();
    }, []);

    const getdata = () => {
        axios.get(`http://localhost:8008/get-restaurants?rating_gte=${rating}&_limit=4&_page=${page}&payment_methods.card=${card}&payment_methods.cash=${cash}&_sort=${costForTwo}costForTwo`).then(({ data }) => setData(data));
    }

    const sorting = (el) => {
        console.log('e', el.target.className);

        if (el.target.className === "sortByPriceAsc") {
            setData([...data.sort((a, b) => a.costForTwo - b.costForTwo)]);
        } if (el.target.className === "sortByPriceDesc") {
            setData([...data.sort((a, b) => b.costForTwo - a.costForTwo)]);
        }
    }
   

    return (
        <div>
            <SortAndFilterButtons handleSort={sorting}  />
            <div style={{ display: "flex", flexWrap: "wrap",gap:"20px" }}>

                {data.map((e) =>
                    <RestaurantCard e={e} key={e.id} />
                )}
            </div>
        </div>
    )
}