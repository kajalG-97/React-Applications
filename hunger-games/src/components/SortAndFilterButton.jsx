export const SortAndFilterButtons = ({ handleSort, handleSortByStar, handleSortByPayment}) => {

    return (
        <div style={{margin:"auto"}}>
            <div>
                <button onClick={handleSortByStar}>1 star</button>
                <button onClick={handleSortByStar}>2 star</button>
                <button onClick={handleSortByStar}>3 star</button>
                <button onClick={handleSortByStar}>4 star</button>
            </div>
            <div>
                <button onClick={handleSortByPayment}>cash only restaurants</button>
                <button onClick={handleSortByPayment}>card accepted restaurants</button>
                <button onClick={handleSortByPayment}>All</button>
            </div>
            <div>
                <button className="sortByPriceDesc" onClick={handleSort}>high to low</button>
                <button className="sortByPriceAsc"onClick={handleSort}>low to high</button>

            </div>

        </div>
    )
}