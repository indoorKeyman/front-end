import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import ChatSide from "../components/chat/ChatSide";
import ChatMain from "../components/chat/ChatMain";
import Header from "../components/Header";

function Chat() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Header />
      <Container
        sx={{ display: "flex", justifyContent: "space-between", mt: 8 }}
      >
        <ChatSide sx={{}} />
        <ChatMain sx={{}} />
      </Container>
    </>
  );
}

export default Chat;
