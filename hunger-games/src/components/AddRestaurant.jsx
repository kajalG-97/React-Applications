import axios from "axios";
import { useEffect, useState } from "react"

export const AddRestaurant = () => {

    const [cash, setCash] = useState(false);
    const [card, setCard] = useState(false);

    const [formData, setFormData] = useState(({
        "name": "",
        "cuisine": [],
        "costForTwo": "",
        "minOrder": "",
        "deliveryTime": "",
        "rating": "",
        "votes": "",
        "reviews": "",
        "src": ""
    }));


    const postData = () => {
        axios.post("http://localhost:8008/get-restaurants", { formData, payment_methods: { card, cash } }).then(() => {
            setFormData({
                "name": "",
                "cuisine": [],
                "costForTwo": "",
                "payment_methods": {
                    card: card,
                    cash: cash
                },
                "minOrder": "",
                "deliveryTime": "",
                "rating": "",
                "votes": "",
                "reviews": "",
                "src": ""
            });
        })
    }
    const handleChange = (e) => {
        let { className, value, type, checked } = e.target;
        value = type === "checkbox" ? checked : value;
        console.log('className:', className);
        if (type === "checkbox" && checked) {
            formData.cuisine.push(className);
            console.log('category', formData.cuisine);
        }
        if (e.target.type !== "checkbox") {

            setFormData({
                ...formData,
                [className]: value,
            });
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    }



    const { name, costForTwo, minOrder, deliveryTime, rating, votes, reviews, src } = formData;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1> Add a new restaurant</h1>
                <label>Name</label>
                <input type="text" className="name" value={name} onChange={handleChange} required />
                <br />
                <label>Cuisine</label>
                <br />
                <label>Continental</label>
                <input
                    type="checkbox"
                    className="continental"
                    onChange={handleChange}
                />
                <br />
                <label>Asian</label>
                <input type="checkbox" className="Asian" onChange={handleChange} />
                <br />
                <label>Pizza</label>
                <input type="checkbox" className="Pizza" onChange={handleChange} />
                <br />
                <label>Deserts</label>
                <input type="checkbox" className="Deserts" onChange={handleChange} />
                <br />
                <label>CostForTwo</label>
                <input type="number" className="costForTwo" value={costForTwo} onChange={handleChange} required />
                <br />
                <label>payment_methods</label>
                <br />
                <label>Cash</label>
                <input type="checkbox" className="cash" onChange={() => {
                    setCash(!cash);
                }} />
                <label>Card</label>
                <input type="checkbox" className="card" onChange={() => {
                    setCard(!card);
                }} />
                <br />
                <label>minOrder</label>
                <input type="number" className="minOrder" value={minOrder} onChange={handleChange} required />
                <br />
                <label>deliveryTime</label>
                <input type="number" className="deliveryTime" value={deliveryTime} onChange={handleChange} required />
                <br />
                <label>rating</label>
                <input type="number" className="rating" value={rating} onChange={handleChange} required />
                <br />
                <label>votes</label>
                <input type="number" className="votes" value={votes} onChange={handleChange} required />
                <br />
                <label>reviews</label>
                <input type="number" className="reviews" value={reviews} onChange={handleChange} required />
                <br />
                <label>Image</label>
                <input type="text" className="src" value={src} onChange={handleChange} required />
                <br />
                <input type="submit" className="submit" />

            </form>
        </div>
    )
}