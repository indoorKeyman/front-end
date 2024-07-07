import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Header from '../components/Header';
import ReviewList from "../components/ReviewList";

function MyReviewPage() {
    return (
        <>
            <Header />
            <Container component="main" maxWidth="xl">
                <Box className='listHeader' >
                    My Review
                </Box>
                <Box width="80%" pl={15}>
                    <ReviewList />
                </Box>
            </Container >
        </>
    );
}

export default MyReviewPage;