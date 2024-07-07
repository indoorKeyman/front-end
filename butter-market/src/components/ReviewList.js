import { Rating, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import TableCell from '@mui/material/TableCell';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";


function ReviewList() {
    const StyledTableCellB = styled(TableCell)(() => ({
        fontSize: "20px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    }));

    const StyledTableCellBL = styled(TableCell)(() => ({
        fontSize: "25px",
        borderRight: "solid  6px #060705",
    }));

    const StyledTableCellBLH = styled(TableCell)(() => ({
        fontSize: "25px",
        borderRight: "solid  6px #060705",
        borderRadius: "0 10px 0 0"
    }));

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
            color: '#e1ad01',
        },
    });

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    };


    return (
        <Box sx={{ mt: "100px" }}>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCellB align="center">내용</StyledTableCellB>
                            <StyledTableCellB align="center">별점</StyledTableCellB>
                            <StyledTableCellB align="center">닉네임</StyledTableCellB>
                            <StyledTableCellBLH align="center">날짜</StyledTableCellBLH>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <StyledTableCellB align="left">
                                Eiusmod esse cupidatat eiusmod id commodo non culpa.
                            </StyledTableCellB>
                            <StyledTableCellB align="center">
                                <StyledRating

                                    size="small"
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    readOnly
                                />

                            </StyledTableCellB>
                            <StyledTableCellB align="center">3</StyledTableCellB>
                            <StyledTableCellBL align="center">4</StyledTableCellBL>
                        </TableRow>
                        <TableRow>
                            <StyledTableCellB align="left">
                                loreNostrud dolore magna ad qui reprehenderit.
                            </StyledTableCellB>
                            <StyledTableCellB align="center">
                                <StyledRating
                                    size="small"
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    readOnly
                                />
                            </StyledTableCellB>
                            <StyledTableCellB align="center">3</StyledTableCellB>
                            <StyledTableCellBL align="center">4</StyledTableCellBL>
                        </TableRow>
                        <TableRow>
                            <StyledTableCellB align="left">
                                loreNostrud dolore magna ad qui reprehenderit.
                            </StyledTableCellB>
                            <StyledTableCellB align="center">
                                <StyledRating
                                    size="small"
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    readOnly
                                />
                            </StyledTableCellB>
                            <StyledTableCellB align="center">3</StyledTableCellB>
                            <StyledTableCellBL align="center">4</StyledTableCellBL>
                        </TableRow>
                        <TableRow>
                            <StyledTableCellB align="left">
                                loreNostrud dolore magna ad qui reprehenderit.
                            </StyledTableCellB>
                            <StyledTableCellB align="center">
                                <StyledRating
                                    size="small"
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    readOnly
                                />
                            </StyledTableCellB>
                            <StyledTableCellB align="center">3</StyledTableCellB>
                            <StyledTableCellBL align="center">4</StyledTableCellBL>
                        </TableRow>
                        <TableRow>
                            <StyledTableCellB align="left">
                                loreNostrud dolore magna ad qui reprehenderit.
                            </StyledTableCellB>
                            <StyledTableCellB align="center">
                                <StyledRating
                                    size="small"
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    readOnly
                                />
                            </StyledTableCellB>
                            <StyledTableCellB align="center">3</StyledTableCellB>
                            <StyledTableCellBL align="center">4</StyledTableCellBL>
                        </TableRow>
                        <TableRow>
                            <StyledTableCellB align="left">
                                loreNostrud dolore magna ad qui reprehenderit.
                            </StyledTableCellB>
                            <StyledTableCellB align="center">
                                <StyledRating
                                    size="small"
                                    name="half-rating-read"
                                    defaultValue={2.5}
                                    precision={0.5}
                                    readOnly
                                />
                            </StyledTableCellB>
                            <StyledTableCellB align="center">3</StyledTableCellB>
                            <StyledTableCellBL align="center">4</StyledTableCellBL>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                sx={{
                    borderRadius: '0 0 10px 10px',
                    borderTop: "solid 1px #060705",
                    borderBottom: "solid 6px #060705",
                    borderRight: "solid 6px #060705",
                }}
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={4} //<<<<<<<<<<<<<<<<<<<<<수정 필요
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

        </Box>
    );


}

export default ReviewList