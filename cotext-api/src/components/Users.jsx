
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const Users = () => {
    const [data, setData] = useState();
    useEffect(() => {
        getData();
    }, []);
    
    const getData = () => {
        axios.get("http://localhost:5555/users").then(({ data }) => {
            setData(data);
        })
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} >
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Age</StyledTableCell>
                        <StyledTableCell align="right">Date of Birth</StyledTableCell>
                        <StyledTableCell align="right">Address</StyledTableCell>
                        <StyledTableCell align="right">State</StyledTableCell>
                        <StyledTableCell align="right">Pincode</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.age}</StyledTableCell>
                            <StyledTableCell align="right">{row.DOB}</StyledTableCell>
                            <StyledTableCell align="right">{row.address}</StyledTableCell>
                            <StyledTableCell align="right">{row.state}</StyledTableCell>
                            <StyledTableCell align="right">{row.pincode}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
