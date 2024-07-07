import { Box, Button, Container } from "@mui/material";
import Header from "../components/Header";
import { styled } from '@mui/material/styles';
import ProductCard from "../Goods/ProductCard"
import { Link } from "react-router-dom";

function Trading() {

    const ColorButton = styled(Button)(({ theme }) => ({
        width: "150px",
        height: "40px",
        backgroundColor: "#1C4464",
        color: "white",

        '&:hover': {
            backgroundColor: "#F9D020",
            color: "black",
        },
    }));

    const EditLink = styled(Link)(({ theme }) => ({

        textDecoration: "none",
    }));

    return (
        <>
            <Header />
            <Container component="main" maxWidth="xl" sx={{ minWidth: 1100, minHeight: 300 }}  >
                <Box className='listHeader' >
                    Trading
                </Box>
                <Box sx={{ mb: '25px', pr: '70px', display: "flex", alignItems: "end", justifyContent: "right" }}>
                    <EditLink to={"/enrollment"}>
                        <ColorButton variant='contained' >등록하기</ColorButton>
                    </EditLink>
                </Box>
                <Box
                    component="main"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        width: '100%',
                        margin: '0 auto',
                    }}
                >
                    <ProductCard id={1} />
                    <ProductCard id={2} />
                    <ProductCard id={3} />
                    <ProductCard id={4} />
                    <ProductCard id={5} />
                    <ProductCard id={6} />
                    <ProductCard id={7} />
                    <ProductCard id={8} />
                </Box>
            </Container>
        </>
    );
}

export default Trading;