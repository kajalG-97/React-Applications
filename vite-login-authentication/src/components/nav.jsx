import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <>
        <Link to={"/login"}><button>Login</button></Link>
        <Link to={"/"}><button>Home</button></Link>
        </>
    )
}