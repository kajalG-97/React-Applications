import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({ id, imageUrl, title, price }) => {

  return (
    <Link to={`/bookdetailspage/:${id}`}>
      <div  key={id} >

        <img src={imageUrl} />
        <h2 className="title">{title}</h2>
        <p className="price">{price}</p>
      </div>
    </Link>
  )
 
};
