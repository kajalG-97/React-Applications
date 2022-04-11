const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        cuisine: [{ type: String, required: true }],
        costForTwo: { type: Number, required: true },
        payment_methods: {
            card: { type: Boolean, required: true },
            cash: { type: Boolean, required: true },
        },
        minOrder: { type: Number, required: true },
        deliveryTime: { type: Number, required: true },
        rating: { type: Number, required: true },
        votes: { type: Number, required: true },
        reviews: { type: Number, required: true },
        src: { type: String, required: true },


    },
    {
        versionKey: false,
        timestamps: true,
    }
);


const Restaurant = mongoose.model("restaurantsData", restaurantSchema);

module.exports = Restaurant;