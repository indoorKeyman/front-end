import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function ChatMain() {
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#1C4464",
    color: "white",
    "&:hover": {
      backgroundColor: "#F9D020",
      color: "black",
    },
  }));
  //modal입니다.
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card sx={{ maxWidth: "1100px" }}>
        <CardHeader
          sx={{ width: "800px", bgcolor: "#ccc" }}
          avatar={<Avatar sx={{ bgcolor: red[500] }}></Avatar>}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon onClick={handleClickOpen} />
              <Dialog
                open={open}
                onClose={handleClose}
                sx={{ textAlign: "center" }}
              >
                <DialogTitle>후기 작성하기</DialogTitle>
                <DialogContent>
                  <DialogContentText sx={{}}>
                    (한 줄 후기를 작성하여 따듯한 버터마켓을 만들어가요!)
                  </DialogContentText>
                  <DialogContentText
                    sx={{ mt: 3, textAlign: "left", color: "black" }}
                  >
                    Nickname님에게 후기 남기기
                  </DialogContentText>
                  <TextField
                    margin="normal"
                    id="report"
                    label="내용을 입력해주세요"
                    fullWidth
                    rows={4}
                    variant="filled"
                    inputProps={{
                      style: {
                        height: "150px",
                        lineHeight: "0px",
                      },
                      border: "1px solid #000",
                      borderRadius: 10,
                    }}
                  />
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    sx={{
                      backgroundColor: "#1C4464",
                      color: "#fff",
                      ":hover": {
                        bgcolor: "#F9D020",
                        color: "black",
                      },
                    }}
                  >
                    {" "}
                    등록하기
                  </Button>
                  <Button
                    onClick={handleClose}
                    sx={{
                      color: "black",
                      ":hover": {
                        bgcolor: "#ccc",
                        color: "black",
                      },
                    }}
                  >
                    취소하기
                  </Button>
                </DialogActions>
              </Dialog>
            </IconButton>
          }
        />

        <CardContent sx={{ height: "450px" }}></CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "80px",
            bgcolor: "#ccc",
          }}
        >
          <TextField
            id="standard-multiline-flexible"
            label="메세지를 입력해주세요."
            multiline
            maxRows={4}
            variant="standard"
            sx={{ width: "0.8" }}
          />
          <ColorButton
            type="submit"
            variant="contained"
            sx={{ borderRadius: "12px" }}
          >
            보내기
            <SendIcon sx={{ ml: 1, width: "20px" }} />
          </ColorButton>
        </Box>
      </Card>
    </>
  );
}

export default ChatMain;
