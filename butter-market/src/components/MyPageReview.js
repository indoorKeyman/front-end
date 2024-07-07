import { Paper, Box, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import TableCell from '@mui/material/TableCell';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

function MyPageReview() {

    const StyledTableCell = styled(TableCell)(() => ({
        fontSize: "20px",
    }));

    const StyledTableCellB = styled(TableCell)(() => ({
        fontSize: "25px",
    }));

    const StyledTableRow = styled(TableRow)(() => ({
        borderBottom: "solid  6px #060705",
        borderRight: "solid  6px #060705",
    }));

    const StyledTableRowH = styled(TableRow)(() => ({
        borderBottom: "double  2px #060705",
        borderRight: "solid 6px #060705",
    }));

    const EditLink = styled(Link)(({ theme }) => ({
        textDecoration: "none",
        color: "#1C4464"
    }));

    return (

        <Box mt={10}>
            <Box mb={2} sx={{
                display: 'flex',
                alignItems: 'center',
                width: 1,
                justifyContent: "space-between",
            }}>
                <Typography variant="h4" mb={2} fontWeight={700}>
                    나의 후기
                </Typography>
                <EditLink to={"/review"} >
                    + 더보기
                </EditLink>
            </Box >
            <Box sx={{ maxWidth: 1300 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">

                        <TableHead>
                            <StyledTableRowH>
                                <StyledTableCell align="center">내용</StyledTableCell>
                                <StyledTableCell align="center">별</StyledTableCell>
                                <StyledTableCell align="center">닉네임</StyledTableCell>
                                <StyledTableCell align="center">날짜</StyledTableCell>
                            </StyledTableRowH>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCellB align="left">
                                    loreNostrud dolore magna ad qui reprehenderit .
                                </StyledTableCellB>
                                <StyledTableCellB align="center">2</StyledTableCellB>
                                <StyledTableCellB align="center">3</StyledTableCellB>
                                <StyledTableCellB align="center">4</StyledTableCellB>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>


        </Box >






    );


}

export default MyPageReview