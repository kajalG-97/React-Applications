import axios from "axios";
import { useEffect, useState } from "react"

export const AddRestaurant = () => {

    const [paymentMethod, setpaymentMethod] = useState({
        cash: false,
        card: false
    });
    const [category, setCategory] = useState([]);

    const [formData, setFormData] = useState({
        "name": "",
        "costForTwo": "",
        "minOrder": "",
        "deliveryTime": "",
        "rating": "",
        "votes": "",
        "reviews": "",
        "src": ""
    });


    const postData = () => {
        axios.post("http://localhost:8008/get-restaurants", formData).then(() => {
            setFormData({
                "name": "",
                "cuisine": [],
                "costForTwo": "",
                "payment_methods": {
                    card: false,
                    cash : false
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
        let { className, value } = e.target
        setFormData({
            ...formData,
            [className]: value,
        });
    }
    const handlePayment = (e) => {
        const { className, value } = e.target;
        setpaymentMethod({
            ...paymentMethod,
            [className]: value,
        })

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
                <label>CostForTwo</label>
                <input type="number" className="costForTwo" value={costForTwo} onChange={handleChange} required />
                <br />
                <label>payment_methods</label>
                <br />
                <label>Cash</label>
                <input type="checkbox" className="cash" value={true} onChange={handlePayment}  />
                <label>Card</label>
                <input type="checkbox" className="card" value={true} onChange={handlePayment} />
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