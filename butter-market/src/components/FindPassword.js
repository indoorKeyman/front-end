import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { recoverPassword } from "../app/recoverSlice";

function FindPassword() {
  const [openPasswordFinder, setOpenPasswordFinder] = useState(false);
  const [userEmail, setUserEmail] = useState('')
  const dispatch = useDispatch();

  const passwordFinderDOpen = () => {
    setOpenPasswordFinder(true);
  };

  const passwordFinderDClose = () => {
    setOpenPasswordFinder(false);
  };

  const onChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const checkEmail = (e) => {
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    console.log(userEmail)
    return emailRegex.test(userEmail)
  }

  const onSubmit = (e) => {
    e.preventDefault();


    if (userEmail === "") {
      window.alert("이메일이 비어있습니다.");
      return;
    }

    console.log('이메일 체크... 여기 지나감')
    if (!checkEmail()) {
      window.alert("이메일 형식 오류.");
      return;
    }

    console.log("디스패치 시도")
    dispatch(recoverPassword({ email: userEmail }));

    setUserEmail("");

  };

  return (
    <Box>
      <Typography
        onClick={passwordFinderDOpen}
        component="h1"
        variant="subtitle2"
        sx={{
          color: "blue",
          cursor: "pointer",
        }}
      >
        비밀번호를 잊으셨나요?
      </Typography>

      <Dialog open={openPasswordFinder} onClose={passwordFinderDClose}>
        <DialogTitle>비밀번호 찾기</DialogTitle>
        <DialogContent>
          <DialogContentText>
            입력하신 이메일로 비밀번호를 전송합니다.
          </DialogContentText>
          <TextField
            onChange={onChangeEmail}
            value={userEmail}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={passwordFinderDClose}>취소</Button>
          <Button onClick={onSubmit}>보내기</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default FindPassword;
