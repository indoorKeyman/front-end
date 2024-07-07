import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (state, action) => {
      console.log(state, action);

      axios({
        method: "POST",
        url: "https://302e4c3d-b687-4f75-a816-519ec683328d.mock.pstmn.io/api/auth/login",
        data: {
          id: action.payload.id,
          password: action.payload.password,
        },
      })
        .then((res) => {
          window.alert("정상적으로 로그인 되었습니다!");
          const token = res.data.accessToken;
          if (token) {
            // sessionStorage.setItem("access-token", token);

            Cookies.set("access-token", token); // 쿠키 성공
            // state.accessToken = res.data.accessToken;
          }

          window.location.href = "/list";
        })
        .catch((err) => {
          console.log(state, action);
          window.alert("로그인에 실패하였습니다!", err);
        });
    },

    signup: (state, action) => {
      console.log(action.payload);

      axios({
        method: "POST",
        url: "https://302e4c3d-b687-4f75-a816-519ec683328d.mock.pstmn.io/api/user",
        data: {
          id: action.payload,
          password: action.payload,
          nickname: action.payload,
          phoneNumber: action.payload,
          email: action.payload,
        },
      })
        .catch((err) => {
          console.log(state, action);
          window.alert("회원가입에 실패하였습니다!", err);
        })
        .then((res) => {
          console.log("res : ", res);
          window.alert("정상적으로 회원가입에 되었습니다!");
          window.location.href = "/login";
        });
    },

    duplicatecheck: (state, action) => {
      console.log(action.payload.id);
      const checkid = action.payload.id;
      console.log(checkid);
      axios({
        method: "GET",
        url: `https://302e4c3d-b687-4f75-a816-519ec683328d.mock.pstmn.io/api/user/checkid?id=${checkid}`,
      })
        .catch((err) => {
          console.log(err);
          window.alert("사용가능합니다.", err);
        })
        .then((res) => {
          console.log("res : ", res);
          window.alert("중복된 아이디 입니다.", res);
        });
    },
  },
});

export const { login, signup, duplicatecheck } = userSlice.actions;

export default userSlice.reducer;
