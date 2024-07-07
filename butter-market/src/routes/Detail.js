import DetailCarousel from "../components/DetailCarousel";
import DetailInfo from "../components/DetailInfo"
import Header from "../components/Header";
import DetailProductCard from "../components/DetailProductCard";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

function Detail() {

    const EditLink = styled(Link)(({ theme }) => ({
        textDecoration: "none",
        color: "#1C4464",
        marginRight: '40px'
    }));
    return (
        <>
            <Header />
            <Container
                component="main"
                maxWidth="xl"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: 'center'
                }}
            >

                <DetailCarousel />
                <DetailInfo />
                <Box
                    sx={{
                        mb: '10px',
                        ml: '40px',
                        mt: '60px',

                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '75%',
                    }}>
                    <Typography variant="h6" >
                        Nickname의 판매 상품
                    </Typography>
                    <EditLink to={"/review"} >
                        + 더보기
                    </EditLink>
                </Box>



                <Box
                    component="main"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        width: '80%',
                        margin: '0 auto',
                    }}
                >
                    <DetailProductCard id={1} />
                    <DetailProductCard id={2} />
                    <DetailProductCard id={3} />
                    <DetailProductCard id={4} />
                    <DetailProductCard id={5} />
                    <DetailProductCard id={6} />
                    <DetailProductCard id={7} />
                    <DetailProductCard id={8} />
                </Box>

            </Container>
        </>
    );
}

export default Detail;