
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import butter from "../image/butter.png"
import { Link } from 'react-router-dom';

function Banner() {

    const ColorButton = styled(Button)(({ theme }) => ({
        marginLeft: '20px',
        marginTop: '20px',
        width: "200px",
        height: "45px",
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
        <Box sx={{ mt: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ ml: '3%', mr: '4%' }}>
                <Typography variant="h3" sx={{ mb: '3%', fontWeight: '700' }}>The easiest way to trading!</Typography>
                <Typography variant="h6" sx={{ color: 'gray' }}>Do you want to be proffesional trader?
                    Please, Join Butter Market! You can trade anything you want.
                    Even without money! Simply enroll your Goods and check out other people's goods that are ready for trade!
                </Typography>
                <EditLink to={'/list'}>
                    <ColorButton variant='contained' >check the list</ColorButton>
                </EditLink>
            </Box>

            <Box
                component="img"
                sx={{
                    height: 700,
                    width: 700,
                    ml: '4%',
                    mr: '3%'
                }}
                alt="Profile Img"
                src={butter}
            />

        </Box>
    );
}

export default Banner