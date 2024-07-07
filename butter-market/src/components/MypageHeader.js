import { Button, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import butter from '../image/butter_border.png'
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

function MypageHeader() {

    const ColorButton = styled(Button)(({ theme }) => ({
        width: "200px",
        height: "40px",
        backgroundColor: "#1C4464",
        color: "white",

        '&:hover': {
            backgroundColor: "#F9D020",
            color: "black",
        },
    }));

    const EditLink = styled(Link)(({ theme }) => ({

        textDecoration: "none",
    }));

    return (
        <Box
            mt={10}
            sx={{
                display: 'flex', alignItems: 'center', width: 1,
            }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} mr={14}>
                <Box
                    component="img"
                    sx={{
                        borderRadius: '10%',
                        height: 250,
                        width: 250,
                    }}
                    alt="Profile Img"
                    src={butter}
                />
                <EditLink to={'/editprofile'}>
                    <ColorButton mb={1} variant="contained">
                        Edit Profile
                    </ColorButton>
                </EditLink>
            </Box>
            <Box>
                <Box mb={1} >
                    <Typography variant="h3" mr={4} mb={2} fontWeight={700}>
                        Nickname
                    </Typography>
                    <Typography variant="h6" fontWeight={700} >
                        지역구 지역동
                    </Typography>
                </Box>
                <Typography mb={1} variant="h6" fontWeight={700} >
                    나의 소개글~~~~~~~~~~
                </Typography>
                <Box mb={1}  >
                    <Rating
                        size="large"
                        name="half-rating-read"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default MypageHeader