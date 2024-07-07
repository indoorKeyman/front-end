import { Box, Container } from "@mui/material";
import CompleteList from "../components/CompleteList";
import Header from "../components/Header";

function Complete() {

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
                }} >
                <Box className='listHeader' >
                    Deal!
                </Box>
                <CompleteList />
                <CompleteList />
                <CompleteList />
                <CompleteList />
            </Container>
        </>
    );
}

export default Complete;