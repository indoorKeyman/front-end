import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../app/userSlice";
import Header from "../components/Header";
import { Link } from "react-router-dom";

import FindId from "../components/FindId";
import FindPassword from "../components/FindPassword";

function Login() {
  const ColorButton = styled(Button)(({ theme }) => ({
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

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (id === "" || password === "") {
      window.alert("아이디 또는 비밀번호가 비어있습니다.");
      return;
    }

    dispatch(login({ id: id, password: password }));

    // console.log(id, password);
    setId("");
    setPassword("");
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xl">
        <Box sx={{ pr: 40, pl: 40 }}>
          <Box
            sx={{
              minWidth: "540px",
              borderBottom: "6px solid #060705",
              borderRight: "6px solid #060705",
              borderLeft: "1px solid #060705",
              marginTop: 20,
              padding: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "500",
              borderRadius: "20px",
            }}
          >
            <Typography component="h1" variant="h5">
              😊 로그인을 해주세요.
            </Typography>

            <Box
              component="form"
              onSubmit={onSubmit}
              sx={{ mt: 1, width: "70%", height: "100%" }}
            >
              <Box sx={{ textAlign: "left", mt: 2 }}>아이디</Box>
              <TextField
                onChange={onChangeId}
                value={id}
                margin="normal"
                // required
                fullWidth
                id="email"
                label="아이디를 입력해주세요"
                name="email"
                autoFocus
              />
              <Box sx={{ textAlign: "left", mt: 1 }}>비밀번호</Box>
              <TextField
                onChange={onChangePw}
                value={password}
                margin="normal"
                // required
                fullWidth
                id="password"
                label="비밀번호를 입력해주세요"
                type="password"
                name="password"
                autoComplete="current-password"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  mt: "10px",
                }}
              >
                <FindId />

                <FindPassword />
              </Box>

              <Box sx={{ display: "flex", width: 1, justifyContent: "center" }}>
                <ColorButton
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    mr: 1,
                    borderRadius: "12px",
                    width: "175px",
                  }}
                >
                  로그인
                </ColorButton>

                <EditLink to={"/signup"}>
                  <ColorButton
                    type="submit"
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      ml: 1,
                      borderRadius: "12px",
                      width: "175px",
                    }}
                  >
                    회원가입
                  </ColorButton>
                </EditLink>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Login;
