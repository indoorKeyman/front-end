import * as React from "react";

import {
  Box,
  CssBaseline,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Avatar,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const messages = [
  {
    id: 1,
    primary: "본재",
    secondary: "꽁짜로 주심 안되나요",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "상민",
    secondary: `오늘의 할 일 간지나게 자기`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    primary: "인규",
    secondary: "마늘이 싸움에서 모두 지면? 다진마늘",
    person: "/static/images/avatar/2.jpg",
  },
  {
    id: 4,
    primary: "효령",
    secondary: "교환하고 싶어요 !",
    person: "/static/images/avatar/3.jpg",
  },
];

function ChatSide() {
  return (
    <>
      <CssBaseline />
      <Paper square sx={{ pb: "30px", height: "600px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pt: 1,
            pb: 1,
            background: "#ccc",
          }}
        >
          <KeyboardBackspaceIcon
            fontSize="large"
            sx={{ width: "50px", pl: 1 }}
          />
          <Typography sx={{}}>뒤로가기</Typography>
        </Box>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Today
                </ListSubheader>
              )}

              {id === 3 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Yesterday
                </ListSubheader>
              )}

              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </>
  );
}

export default ChatSide;
