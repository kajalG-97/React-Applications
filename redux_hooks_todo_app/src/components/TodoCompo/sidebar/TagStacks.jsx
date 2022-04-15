import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

export const TagStacks = () => {
    return (
        <Box>
            <br />
            <Button sx={[{ border: "2px solid #81d4fa", bgcolor: "#b3e5fc", width: "130px", m: 1, ml: 3 }]}>All</Button>
            <br />
            <Button sx={[{ border: "2px solid #81c784", bgcolor: "#a5d6a7", width: "130px", m: 1, ml: 3 }]}>Personal</Button>
            <br />
            <Button sx={[{ border: "2px solid #b39ddb", bgcolor: "#d1c4e9", width: "130px", m: 1, ml: 3 }]}>Official</Button>
            <br />
            <Button sx={[{ border: "2px solid #fcac35", bgcolor: "#ffcc80", width: "130px", m: 1, ml: 3 }]}>Others</Button>
        </Box>
    )
}