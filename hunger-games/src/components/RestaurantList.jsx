import axios from "axios"
import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { SortAndFilterButtons } from "./SortAndFilterButton";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



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
        console.log('e', el.target.id);

        if (el.target.id === "sortByPriceAsc") {
            setSort("asc");
        } if (el.target.id === "sortByPriceDesc") {
            setSort("desc");
        }
    }
    const handleSortByStar = (e) => {
        if (e.target.id === "1star") {
            console.log('target', e.target);
            setRating(1);
        }
        if (e.target.id === "2star") {
            console.log('target', e.target);
            setRating(2);
        }
        if (e.target.id === "3star") {
            console.log('target', e.target);
            setRating(3);
        }
        if (e.target.id === "4star") {
            console.log('target', e.target);
            setRating(4);
        }
    }

    const handleSortByPayment = (e) => {
        if (e.target.id === "card") {
            setCard(true);
            setCash(false);
        }
        if (e.target.id === "cash") {
            setCash(true);
            setCard(false);
        }
        if (e.target.id === "all") {
            setCash(true);
            setCard(true);
        }
    }

    const handlePage = (e) => {
        if (e.target.id === "prev") {
            setPage(page - 1);
        }
        if (e.target.id === "next") {
            setPage(page + 1);
        }
    }

    return (
        <div>
            <SortAndFilterButtons handleSort={sorting} handleSortByStar={handleSortByStar} handleSortByPayment={handleSortByPayment} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin: "auto", width: "90%", marginTop: "30px" }}>

                {data&&data.map((e) =>
                    <RestaurantCard e={e} key={e.id} />
                )}
            </div>
            <div>
                <button id="prev" onClick={handlePage}>Prev</button>
                <button id="next" onClick={handlePage}>Next</button>
            </div>
            <Stack spacing={2}>

                <Pagination count={5} color="primary"/>

            </Stack>
        </div>
    )
}