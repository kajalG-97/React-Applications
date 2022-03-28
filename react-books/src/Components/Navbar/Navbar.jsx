import { Link, Navigate } from "react-router-dom";
import { Text } from "../style";
export const Navbar = () => {
  return (
    <>
      <Text className="navbar">
        
       
         
        <Link to={"/"}><button className="home">Home</button></Link>
        <Link to={"/section/:Mystery"}><button className="mystery">Mystery</button></Link>
        <Link to={"/section/:Technology"}><button className="technology">Technology</button></Link>
        <Link to={"/section/:Mythology"}><button className="mythology">Mythology</button></Link>
        <Link to={"/section/:History"}><button className="history">History</button></Link>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </Text>
    </>
  );
};
