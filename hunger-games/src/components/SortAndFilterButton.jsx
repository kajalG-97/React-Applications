import * as React from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

export const SortAndFilterButtons = ({ handleSort, handleSortByStar, handleSortByPayment }) => {

    return (
        <div style={{ margin: "auto" }}>

            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <div>
                    <Button id="card" onClick={handleSortByPayment} variant="outlined">Card</Button>
                    <Button id="cash" onClick={handleSortByPayment} variant="outlined">Cash</Button>
                    <Button id="all" onClick={handleSortByPayment} variant="outlined">All</Button>
                </div>
                <div>
                    <Button id="sortByPriceDesc" onClick={handleSort} variant="outlined">high to low</Button>
                    <Button id="sortByPriceAsc" onClick={handleSort} variant="outlined">low to high</Button>
                </div>
            </div>
            <div>
                <h3>Sort By Star</h3>
                <Button sx={{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }} id="1star" onClick={handleSortByStar} variant="outlined">
                    <Rating name="size-medium" defaultValue={1} readOnly />
                </Button>
                <Button sx={{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }} id="2star" onClick={handleSortByStar} variant="outlined"><Rating name="size-medium" defaultValue={2} readOnly /></Button>
                <Button sx={{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }} id="3star" onClick={handleSortByStar} variant="outlined"><Rating name="size-medium" defaultValue={3} readOnly /></Button>
                <Button sx={{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }} id="4star" onClick={handleSortByStar} variant="outlined"><Rating name="size-medium" defaultValue={4} readOnly /></Button>
            </div>
        </div>
    )
}