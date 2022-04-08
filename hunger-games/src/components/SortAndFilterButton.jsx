export const SortAndFilterButtons = ({ handleSort, handleSortByStar, handleSortByPayment}) => {

    return (
        <div style={{margin:"auto"}}>
            <div>
                <button className="1star"onClick={handleSortByStar}>1 star</button>
                <button className="2star"onClick={handleSortByStar}>2 star</button>
                <button className="3star"onClick={handleSortByStar}>3 star</button>
                <button className="4star"onClick={handleSortByStar}>4 star</button>
            </div>
            <div>
                <button className="cash" onClick={handleSortByPayment}>cash only restaurants</button>
                <button className="card" onClick={handleSortByPayment}>card accepted restaurants</button>
                <button className="all" onClick={handleSortByPayment}>All</button>
            </div>
            <div>
                <button className="sortByPriceDesc" onClick={handleSort}>high to low</button>
                <button className="sortByPriceAsc"onClick={handleSort}>low to high</button>

            </div>
           

        </div>
    )
}