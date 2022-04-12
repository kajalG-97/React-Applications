import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export const BasicRating=()=> {
    const [value, setValue] = React.useState(1);

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">Sort By Rating</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            {/* <Typography component="legend">Sort By Rating</Typography>
            <Rating name="read-only" value={value} readOnly /> */}
        </Box>
    );
}
