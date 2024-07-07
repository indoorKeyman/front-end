

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import { useState } from 'react';

import { signup, duplicatecheck } from '../app/userSlice'
import Header from '../components/Header';
import { useDispatch } from 'react-redux';



function SignUp() {

    const ColorButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#F9D020",
        color: "#060705",
        '&:hover': {
            backgroundColor: "#FADF68",
            color: "white",
        },
    }));

    const ColorButton2 = styled(Button)(({ theme }) => ({
        backgroundColor: "#F9D020",
        color: "white",
        '&:hover': {
            backgroundColor: "#FADF68",
            color: "#060705",
        },
    }));

    const [newId, setNewId] = useState('')
    const [newNickName, setNewNickName] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('')
    const [newEmail, setNewEmail] = useState('')

    const dispatch = useDispatch();

    const onChangNewId = (e) => {
        setNewId(e.target.value);
    }

    const onChangeNewNickName = (e) => {
        setNewNickName(e.target.value);
    }

    const onChangeNewPassword = (e) => {
        setNewPassword(e.target.value);
    }

    const onChangeNewPhoneNumber = (e) => {
        setNewPhoneNumber(e.target.value);
    }

    const onChangeNewEmail = (e) => {
        setNewEmail(e.target.value);
    }

    const checking = () => {
        dispatch(duplicatecheck({ id: newId }))
    }

    const onSubmit = (e) => {

        e.preventDefault();

        if (newId === "") {
            window.alert("아이디가 비어있습니다.");
            return;
        }
        if (newPassword === "") {
            window.alert("비밀번호가 비어있습니다.");
            return;
        }
        if (newNickName === "") {
            window.alert("닉네임이 비어있습니다.");
            return;
        }
        if (newPhoneNumber === "") {
            window.alert("전화번호가 비어있습니다.");
            return;
        }
        if (newEmail === "") {
            window.alert("이메일이 비어있습니다.");
            return;
        }

        dispatch(signup({ id: newId, password: newPassword, nickname: newNickName, phonenumber: newPhoneNumber, email: newEmail }))

        setNewId("");
        setNewNickName("");
        setNewPassword("")
        setNewPhoneNumber("")
        setNewEmail("")
    }


    return (
        <>
            <Header />
            <Container component="main" maxWidth="xl" >
                <Box sx={{ pr: 40, pl: 40, minWidth: '800px' }}>
                    <Box
                        sx={{
                            borderBottom: '6px solid #060705',
                            borderRight: '6px solid #060705',
                            borderLeft: '1px solid #060705',
                            marginTop: 20,
                            padding: 5,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '500',
                            borderRadius: '20px'
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            😘 회원가입을 해주세요.
                        </Typography>

                        <Box component="form" onSubmit={onSubmit} sx={{ mt: 1, width: '70%', height: '100%' }}>
                            <Box sx={{ textAlign: 'left', mt: 2, }}>아이디</Box>
                            <Box sx={{ display: 'flex', alignItems: "center" }}>
                                <TextField
                                    onChange={onChangNewId}
                                    value={newId}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="newId"
                                    label="새로운 아이디를 입력해주세요"
                                    name="newId"
                                    autoFocus
                                />
                                <ColorButton
                                    onClick={checking}
                                    variant="contained"
                                    sx={{ width: "30%", ml: "2%", height: "20%" }}
                                >
                                    중복확인
                                </ColorButton>
                            </Box>
                            <Box sx={{ textAlign: 'left', mt: 1, }}>비밀번호</Box>
                            <TextField
                                onChange={onChangeNewPassword}
                                value={newPassword}
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="비밀번호를 입력해주세요"
                                type="password"
                                name="password"
                                autoComplete="current-password"
                            />
                            <Box sx={{ textAlign: 'left', mt: 2, }}>닉네임</Box>
                            <TextField
                                onChange={onChangeNewNickName}
                                value={newNickName}
                                margin="normal"
                                required
                                fullWidth
                                id="newNickName"
                                label="새로운 닉네임를 입력해주세요"
                                name="newNickName"
                                autoFocus
                            />
                            <Box sx={{ textAlign: 'left', mt: 2, }}>전화번호</Box>
                            <TextField
                                onChange={onChangeNewPhoneNumber}
                                value={newPhoneNumber}
                                margin="normal"
                                required
                                fullWidth
                                id="phoneNumber"
                                label="전화번호를 입력해주세요"
                                name="phoneNumber"
                                autoFocus
                            />
                            <Box sx={{ textAlign: 'left', mt: 2, }}>이메일</Box>
                            <TextField
                                onChange={onChangeNewEmail}
                                value={newEmail}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="이메일을 입력해주세요"
                                name="email"
                                autoFocus
                            />
                            <ColorButton2
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, ml: 17, borderRadius: '12px', maxWidth: '250px' }}
                            >
                                회원가입하기
                            </ColorButton2>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    );
}



export default SignUp;