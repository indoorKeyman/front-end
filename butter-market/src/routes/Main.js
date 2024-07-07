import { Container } from "@mui/system";
import Banner from "../components/Banner";
import Header from "../components/Header";

function Main() {
  return (
    <div>
      <Header />
      <Container component="main" maxWidth="xl">
        <Banner />
      </Container>
    </div>
  );
}

export default Main;
