export const SortAndFilterButtons = ({ handleSort, handleSortByStar, handleSortByPayment}) => {

    return (
        <div style={{ margin: "auto" }}>
            <div>
                <h1>Sort By Star</h1>
                <Button className="1star" onClick={handleSortByStar} variant="outlined">
                    <Rating name="size-medium" defaultValue={1} readOnly />
                </Button>
                <Button className="2star" onClick={handleSortByStar} variant="outlined"><Rating name="size-medium" defaultValue={2} readOnly /></Button>
                <Button className="3star" onClick={handleSortByStar} variant="outlined"><Rating name="size-medium" defaultValue={3} readOnly /></Button>
                <Button  className="4star" onClick={handleSortByStar} variant="outlined"><Rating name="size-medium" defaultValue={4} readOnly /></Button>
            </div>
            <div>
                <Button className="card" onClick={handleSortByPayment} variant="outlined">Card</Button>
                <Button className="cash" onClick={handleSortByPayment} variant="outlined">Cash</Button>
                <Button className="all" onClick={handleSortByPayment} variant="outlined">All</Button>
            </div>
            <Button className="sortByPriceDesc" onClick={handleSort} variant="outlined">high to low</Button>
            <Button className="sortByPriceAsc" onClick={handleSort} variant="outlined">low to high</Button>           

        </div>
    )
}