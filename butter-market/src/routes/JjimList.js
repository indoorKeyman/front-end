import { Container } from "@mui/material";
import Header from "../components/Header";

import ProductCard from "../Goods/ProductCard"
import { Box } from "@mui/system";

function JjimList() {



    return (
        <>
            <Header />
            <Container component="main" maxWidth="xl" sx={{ minWidth: 1100, minHeight: 300 }}  >
                <Box className='listHeader' >
                    Wish list
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

export default JjimList;