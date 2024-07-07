import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import butter from "../image/butter_border.png"
import { styled } from '@mui/material';

function MediaCard({ id }) {

  const PdLink = styled(Link)(({ theme }) => ({
    color: "black",
    textDecoration: "none",
  }));

  const ColorButton = styled(Button)(({ theme }) => ({
    width: "50px",
    height: "30px",
    backgroundColor: "#F9D020",
    color: "#060705",
    marginBottom: "10px",
    '&:hover': {
      backgroundColor: "#FADF68",
    },
  }));

  return (
    <Card
      sx={{
        width: 250,
        height: 350,
        margin: 2.5,
        borderRadius: '10px',
        borderRight: 'solid 3px #1C4464',
        borderBottom: 'solid 3px #1C4464'
      }}
    >
      <PdLink to={`/detail/${id}`} >
        <CardMedia
          sx={{
            height: 212,
            borderBottom: "solid 1px #060705"
          }}
          image={butter}
          title="product img"
        />
      </PdLink>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1
          }}
        >
          <PdLink to={`/detail/${id}`} >
            <Typography variant="h6" >
              물품명
            </Typography>
          </PdLink>
          <PdLink to={`/${id}/chat`} >
            <ColorButton variant="contained" size="small">
              Chat
            </ColorButton>
          </PdLink>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          어디구 어디동
        </Typography>
        <Typography variant="body2" >
          관심 2 채팅 1
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MediaCard