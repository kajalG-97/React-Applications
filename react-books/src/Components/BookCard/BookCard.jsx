import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({ id, imageUrl, title, price }) => {

  return (
    <Link to={`/bookdetailspage/:${id}`}>
      <div  key={id} >

        <img src={imageUrl} />
        <h2>{title}</h2>
        <h2>Price: {price}</h2>
      </div>
    </Link>
  )
 
};
