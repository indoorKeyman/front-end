import { Paper, TableContainer, Table, TableHead, TableRow, TableBody } from "@mui/material";
import TableCell from '@mui/material/TableCell';
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

function MypageNav() {

    const StyledTableCell = styled(TableCell)(() => ({
        fontSize: "20px",
    }));

    const StyledTableCellB = styled(TableCell)(() => ({
        fontSize: "30px",
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
            <Box sx={{ maxWidth: 1300, }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <StyledTableRowH>
                                <StyledTableCell align="center">찜 목록</StyledTableCell>
                                <StyledTableCell align="center">채팅목록</StyledTableCell>
                                <StyledTableCell align="center">거래중</StyledTableCell>
                                <StyledTableCell align="center">거래완료</StyledTableCell>
                            </StyledTableRowH>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>

                                <StyledTableCellB align="center">
                                    <EditLink to={"/jjimlist"}>1</EditLink>
                                </StyledTableCellB>

                                <StyledTableCellB align="center">
                                    <EditLink to={"/chatlist"}>2</EditLink>
                                </StyledTableCellB>
                                <StyledTableCellB align="center">
                                    <EditLink to={"/trading"}>3</EditLink>
                                </StyledTableCellB>
                                <StyledTableCellB align="center">
                                    <EditLink to={"/complete"}>4</EditLink>

                                </StyledTableCellB>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default MypageNav