import * as React from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

export const SortAndFilterButtons = ({ handleSort, handleSortPayment, handleSortByStar }) => {
    return (
        <div>
            <div>
                <Button id="sortByAsc" onClick={handleSort} variant="outlined">SortByAsc</Button>
                <Button id="sortByDesc" onClick={handleSort} variant="outlined">SortByDesc</Button>
            </div>
            <div>
                <Button id="card" onClick={handleSortPayment} variant="outlined">Card</Button>
                <Button id="cash" onClick={handleSortPayment} variant="outlined">Cash</Button>
                <Button id="all" onClick={handleSortPayment} variant="outlined">All</Button>
            </div>
            <div>
                <h1>Sort By Star</h1>
                <Button id="one" onClick={handleSortByStar} variant="outlined">
                    <Rating name="size-medium" defaultValue={1} readOnly />
                </Button>
                <Button id="two" onClick={handleSortByStar} variant="outlined"><Rating name="size-medium" defaultValue={2} readOnly /></Button>
                <Button id="three" onClick={handleSortByStar} variant="outlined"><Rating name="size-medium" defaultValue={3} readOnly /></Button>
                <Button id="four" onClick={handleSortByStar} variant="outlined"><Rating name="size-medium" defaultValue={4} readOnly /></Button>
            </div>
        </div>
    )
}