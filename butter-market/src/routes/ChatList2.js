import { Box, Container } from "@mui/material";
import ChatListList from "../components/ChatListList";
import Header from "../components/Header";


function Trading() {

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
                <Box className='listHeader' >
                    Chat list
                </Box>
                <Box width="80%" pl={20} >
                    <ChatListList id={1} />
                    <ChatListList id={2} />
                    <ChatListList id={3} />
                    <ChatListList id={4} />
                </Box>

            </Container>
        </>
    );
}

export default Trading;