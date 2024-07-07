import { Box, Container } from "@mui/system";
import Header from "../components/Header";
import MypageHeader from "../components/MypageHeader";
import MypageNav from "../components/MypageNav";
import MyPageReview from "../components/MyPageReview";




function MyPage() {

    
    return (
        <>
            <Header />
            <Container component="main" maxWidth="xl">
                <Box width="80%" pl={20} >
                    <Box sx={{ display: "flex", alignItems: 'left' }}>
                        <MypageHeader />
                        <Box width='50px' />
                    </Box>
                    <MypageNav />
                    <MyPageReview />
                </Box>
            </Container >
        </>
    );
}

export default MyPage;