import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import { DIV } from "../style";
export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  const { section } = useParams()
  console.log('section', section);
  const bookId = section.split(":")[1]
  const [details, setDetails] = useState([]);
  console.log('details', details);
  useEffect(() => {
    axios.get(`http://localhost:8080/books?section=${bookId}`).then((response) => {
      setDetails(response.data);
      console.log('response in', response.data);

    });
  }, [bookId]);

  const Main = styled.div`
    /* Same as Homepage */
  `;

  const sorting = (el) => {
    console.log('e', el.target.className);

    if (el.target.className === "sortByPriceAsc") {

      setDetails([...details.sort((a, b) => a.price - b.price)]);
    } if (el.target.className === "sortByPriceDesc") {
      setDetails([...details.sort((a, b) => b.price - a.price)]);
    } if (el.target.className === "sortByTitleAsc") {
      setDetails([...details.sort((a, b) => a.title.localeCompare(b.title))]);
    } if (el.target.className === "sortByTitleDesc") {
      setDetails([...details.sort((a, b) => b.title.localeCompare(a.title))]);
    }
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          bookId //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={sorting} />

      <DIV className="sectionContainer">
        {details.map((el) => {
          return <BookCard key={el.id} id={el.id} title={el.title} price={el.price} imageUrl={el.imageUrl} />
        })
        } {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
      </DIV>
    </>
  );
};
