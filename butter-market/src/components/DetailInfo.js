import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import { Link } from "react-router-dom";

/* 이미지 */

function DetailInfo() {

  const ColorButton = styled(Button)(({ theme }) => ({
    width: "400px",
    height: "50px",
    backgroundColor: "#F9D020",
    color: "white",
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: "#FADF68",
    },


  }));

  return (
    <Box  >
      <Card sx={{ width: '1000px', boxShadow: 0 }}>
        <CardHeader
          avatar={
            <Avatar src="/image/prd.png">
            </Avatar>
          }
          action={
            <>
              <IconButton aria-label="share">
                <ShareOutlinedIcon />
              </IconButton>
              <IconButton aria-label="Campaign">
                < WbTwilightOutlinedIcon />
              </IconButton>
            </>
          }
          title="Nickname"
          subheader="지역구 지역동"
        />
        <CardContent sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
        }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: '10px' }}>
            물품명
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: 700, mb: '10px' }}>
            전자기기
          </Typography>

          <Typography variant="body2" sx={{ mb: '10px' }}>
            사용해보니 정말 좋았습니다. 다른 분들도 큰 불편함 없이 좋은 경험하셨으면 하여 나눔진행하겠습니다!
            <br />
            감사합니다!
          </Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex' }}>
          <Typography variant='body2' sx={{ ml: '5px', mr: '5px' }}>조회 139</Typography>
          <Typography variant='body2'>채팅 2</Typography>
        </CardActions>
        <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'space-around' }}>
          <ColorButton>
            <FavoriteBorderOutlinedIcon />
            <Typography variant="h6" sx={{ ml: 1 }}>찜하기</Typography>
          </ColorButton>
          <Link to={"/chatlist"} style={{ textDecoration: "none", color: "inherit" }}>
            <ColorButton>
              <Typography variant="h6">
                1:1 채팅하기
              </Typography>
            </ColorButton>
          </Link>
        </Box >
      </Card>
    </Box>
  );
}

export default DetailInfo