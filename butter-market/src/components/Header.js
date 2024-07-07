import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import search from '../image/search.png';
import butter from '../image/butter.png';

import { Link } from "react-router-dom";
import './Style.css';

import { Box } from '@mui/material';
import Cookies from 'js-cookie';
import { useState } from 'react';

function Header() {

    const [accessToken, setAccessToken] = useState(Cookies.get('access-token'))

    const removeToken = () => {
        setAccessToken(Cookies.remove('access-token'))
        console.log("쿠키삭제")
        console.log('cookie : ', Cookies.get("access-token"))
        window.location.href = "/";
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        backgroundColor: "#f5f5f5",
        '&:hover': {
            backgroundColor: 'white',
        },
        marginRight: theme.spacing(5),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            borderRadius: '15px',
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',

        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '60ch',
                borderBottom: '2px solid #060705',
                borderRadius: '15px'
            },
        },
    }));

    const ColorToolBar = styled(Toolbar)(({ theme }) => ({
        borderRadius: '10px',
        borderBottom: 'solid 5px #1C4464',
        borderRight: 'solid 7px #1C4464',
        minWidth: '1200px'
    }));

    const ColorButton = styled(Button)(({ theme }) => ({
        width: "80px",
        height: "40px",
        backgroundColor: "#1C4464",
        color: "white",

        '&:hover': {
            backgroundColor: "#F9D020",
            color: "black"
        },
    }));

    const ColorButton2 = styled(Button)(({ theme }) => ({
        marginRight: "10px",
        width: "80px",
        height: "40px",
        backgroundColor: "#f5f5f5",
        color: "#060705",
        '&:hover': {
            backgroundColor: "#BFBFBF",
            color: "white",
        },
    }));

    const EditLink = styled(Link)(({ theme }) => ({

        textDecoration: "none",
    }));

    return (

        <ColorToolBar>
            <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
                <Box
                    component="img"
                    sx={{
                        width: 100,
                        height: 100,
                        mr: 3,
                        ml: 3,
                    }}
                    alt="butterlogo"
                    src={butter}
                />
            </Link>
            <Typography
                component="h2"
                variant="h4"
                color="white"
                align="left"
                noWrap
                sx={{ flex: 1, }}
            >
                <Link className='logo' to={`/`} style={{ textDecoration: "none", color: "#060705" }}>
                    Butter Market
                </Link>
            </Typography>

            <Search>
                <SearchIconWrapper>
                    <img src={search} alt="search logo" />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="동네, 이름, 물품명 등을 입력하세요!"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <EditLink to={"/list"}>
                <ColorButton2 variant='contained'>
                    List
                </ColorButton2 >
            </EditLink>

            {
                accessToken ?
                    <Box>
                        <EditLink to={"/mypage"}>
                            <ColorButton variant='contained' sx={{ mr: 1 }} >
                                MyPage
                            </ColorButton>
                        </EditLink>
                        <ColorButton variant='contained' onClick={removeToken} >
                            Logout
                        </ColorButton>
                    </Box>
                    :
                    <EditLink to={"/login"}>
                        <ColorButton variant='contained' >
                            Login
                        </ColorButton>
                    </EditLink>
            }
        </ColorToolBar >
    );
}

export default Header;