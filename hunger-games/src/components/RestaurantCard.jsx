export const RestaurantCard = ({ e }) => {
    return <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius: "15px", lineHeight: "10px", gap: "10px", width: "45%", padding: '10px', display: 'flex' }} key={e.id}>
        <div>
            <img src={e.src} alt={e.name} style={{ width: "250px", height: "250px", borderRadius: "15px" }} />
        </div>
        <div>
            <h2 style={{ color: "blue" }} >{e.name}</h2>
            <div style={{ lineHeight: "0px" }} className="cuisine">
                {e.cuisine.map((ele, i) => {

                    return <h3 style={{ display: "inline-block", marginRight: "5px", color: "grey" }} key={i}>{ele}</h3>
                })}
            </div>
            <h5>Cost For Two {e.costForTwo}</h5>
            <h5>Min Rs.{e.minOrder}</h5>
            <div style={{ color: "grey", lineHeight: "0px", display: "flex", gap: "10px", margin: "auto", width: "40%" }}>
                <h2>{e.payment_methods.card ? "card" : ""}</h2>
                <h2>{e.payment_methods.cash ? "cash" : ""}</h2>
            </div>


        </div>
        <div style={{ display: "inline-block" }}>
            <div style={{ color: "white", background: "green", width: "35px", height: "25px" }}>{e.rating}</div>
            <h5 style={{ color: "grey" }}>{e.votes} votes</h5>
            <h5 style={{ color: "grey" }}>{e.reviews} reviews</h5>
        </div>

    </div>
}