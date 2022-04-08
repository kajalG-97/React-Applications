import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/addRestaurant"><button>AddRestaurant</button></Link>
            
        </div>
    )
}