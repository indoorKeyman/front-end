import { Button, Container } from "@mui/material";
import Header from "../components/Header";
import ProductCard from "../Goods/ProductCard";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { loadList } from "../app/listSlice";

function List() {
  const [accessToken] = useState(Cookies.get("access-token"));
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadList());
  // }, [dispatch]);

  const objectList = useSelector((state) => state.list.objectList);

  const ColorButton = styled(Button)(({ theme }) => ({
    width: "150px",
    height: "40px",
    backgroundColor: "#1C4464",
    color: "white",

    "&:hover": {
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
      <Box className="listHeader">Our list!</Box>
      <Box
        sx={{
          mb: "25px",
          pr: "70px",
          display: "flex",
          alignItems: "end",
          justifyContent: "right",
        }}
      >
        {accessToken ? (
          <EditLink to={"/enrollment"}>
            <ColorButton variant="contained">등록하기</ColorButton>
          </EditLink>
        ) : (
          <EditLink to={"/login"}>
            <ColorButton variant="contained">등록하기</ColorButton>
          </EditLink>
        )}
      </Box>
      <Container
        component="main"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <ProductCard props={objectList} />
      </Container>
    </>
  );
}

export default List;
