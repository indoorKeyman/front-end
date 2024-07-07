import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import butter from "../image/butter_border.png";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { useState } from "react";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function EdiltProfileForm() {
  const [userImg, setUserImg] = useState(butter);
  const [userId, setUserId] = useState("userID");
  const [userPassword, setUserPassword] = useState();
  const [userNickName, setUserNickName] = useState("");
  const [userIntroduce, setuserIntroduce] = useState("");

  const changeUserImg = (e) => {
    const changeImg = e.target.files;
    const currentImageUrl = URL.createObjectURL(changeImg[0]);
    setUserImg(currentImageUrl);
  };

  const onChangeUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const onChangeUserNickName = (e) => {
    setUserNickName(e.target.value);
  };

  const onChangeUserIntroduce = (e) => {
    setuserIntroduce(e.target.value);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    marginLeft: "20px",
    marginTop: "20px",
    width: "200px",
    height: "45px",
    backgroundColor: "#1C4464",
    color: "white",
    "&:hover": {
      backgroundColor: "#F9D020",
      color: "black",
    },
  }));
  const ColorButton2 = styled(Button)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1C4464",
    width: "10%",
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
    <Box sx={{ pr: 40, pl: 40, minWidth: "800px" }}>
      <Box
        sx={{
          borderBottom: "6px solid #060705",
          borderRight: "6px solid #060705",
          borderLeft: "1px solid #060705",
          marginTop: 20,
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          height: "500",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: 1,
            justifyContent: "space-around",
          }}
        >
          <Box
            component="img"
            sx={{
              borderRadius: "10%",
              height: 200,
              width: 200,
            }}
            alt="Profile Img"
            src={userImg}
          />
          <ColorButton2
            onChange={changeUserImg}
            variant="contained"
            component="label"
          >
            <AddPhotoAlternateIcon type="file" sx={{ fontSize: 50 }} />
            <input type="file" accept="image/*" hidden />
          </ColorButton2>
        </Box>

        <Box sx={{ textAlign: "left", mt: 2 }}>아이디</Box>
        <TextField
          value={userId}
          margin="normal"
          required
          fullWidth
          id="newId"
          name="newId"
          autoFocus
        />

        <Box sx={{ textAlign: "left", mt: 2 }}>비밀번호 변경</Box>
        <Box sx={{ display: "flex", alignItems: "center", width: 1 }}>
          <TextField
            onChange={onChangeUserPassword}
            value={userPassword}
            margin="normal"
            required
            fullWidth
            id="password"
            label="비밀번호를 입력해주세요"
            type="password"
            name="password"
            autoComplete="current-password"
          />
          <ColorButton
            // onClick={}
            variant="contained"
            sx={{ width: "30%", ml: "2%", height: "20%" }}
          >
            변경
          </ColorButton>
        </Box>

        <Box sx={{ textAlign: "left", mt: 2 }}>닉네임</Box>
        <Box sx={{ display: "flex", alignItems: "center", width: 1 }}>
          <TextField
            onChange={onChangeUserNickName}
            value={userNickName}
            margin="normal"
            required
            fullWidth
            id="userNickName"
            label="변경할 닉네임를 입력해주세요"
            name="userNickName"
            autoFocus
          />
          <ColorButton
            // onClick={}
            variant="contained"
            sx={{ width: "30%", ml: "2%", height: "20%" }}
          >
            변경
          </ColorButton>
        </Box>
        <Box sx={{ textAlign: "left", mt: 2 }}>소개글</Box>
        <Box sx={{ display: "flex", alignItems: "center", width: 1 }}>
          <TextField
            onChange={onChangeUserIntroduce}
            value={userIntroduce}
            margin="normal"
            required
            fullWidth
            id="userIntroduce"
            label="변경할 닉네임를 입력해주세요"
            name="userIntroduce"
            autoFocus
          />
          <ColorButton
            // onClick={}
            variant="contained"
            sx={{ width: "30%", ml: "2%", height: "20%" }}
          >
            변경
          </ColorButton>
        </Box>
      </Box>
    </Box>
  );
}

export default EdiltProfileForm;
