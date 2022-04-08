import axios from "axios"
import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { SortAndFilterButtons } from "./SortAndFilterButton";

export const RestaurantList = () => {
    const [data, setData] = useState([]);
    const [sort, setSort] = useState("asc");
    const [rating, setRating] = useState(0);
    const [costForTwo, setCostForTwo] = useState("");
    const [card, setCard] = useState(true);
    const [cash,setCash] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getdata();
    }, [rating,page,cash,card,costForTwo,sort]);

    const getdata = () => {
        axios.get(`http://localhost:8008/get-restaurants?rating_gte=${rating}&_limit=4&_page=${page}&payment_methods.card=${card}&payment_methods.cash=${cash}&_sort=costForTwo&_order=${sort}`).then(({ data }) => setData(data));
    }

    const sorting = (el) => {
        console.log('e', el.target.className);

        if (el.target.className === "sortByPriceAsc") {
            setSort("asc");
        } if (el.target.className === "sortByPriceDesc") {
            setSort("desc");
        }
    }
    const handleSortByStar = (e) => {
        if (e.target.className === "1star") {
            console.log('target', e.target);
            setRating(1);
        }
        if (e.target.className === "2star") {
            console.log('target', e.target);
            setRating(2);
        }
        if (e.target.className === "3star") {
            console.log('target', e.target);
            setRating(3);
        }
        if (e.target.className === "4star") {
            console.log('target', e.target);
            setRating(4);
        }
    }

    const handleSortByPayment = (e) => {
        if (e.target.className === "card") {
            setCard(true);
            setCash(false);
        }
        if (e.target.className === "cash") {
            setCash(true);
            setCard(false);
        }
        if (e.target.className === "all") {
            setCash(true);
            setCard(true);
        }
    }

    const handlePage = (e) => {
        if (e.target.className === "prev") {
            setPage(page - 1);
        }
        if (e.target.className === "next") {
            setPage(page + 1);
        }
    }

    return (
        <div>
            <SortAndFilterButtons handleSort={sorting} handleSortByStar={handleSortByStar} handleSortByPayment={handleSortByPayment} handlePage={handlePage}/>
            <div style={{ display: "flex", flexWrap: "wrap",gap:"20px" }}>

                {data&&data.map((e) =>
                    <RestaurantCard e={e} key={e.id} />
                )}
            </div>
        </div>
    )
}