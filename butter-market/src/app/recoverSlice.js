import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const recoverSlice = createSlice({
  name: "recover",
  initialState: {},
  reducers: {
    recoverId: (state, action) => {
      console.log(state, action);

      axios({
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("access-token")}`,
        },
        method: "GET",
        url: "https://302e4c3d-b687-4f75-a816-519ec683328d.mock.pstmn.io/api/recover/id",
        data: {
          email: action.payload.email
        },
      })
        .then((res) => {
          console.log("recoverId :", res)

          window.alert("이메일이 발송 되었습니다!");

          window.location.href = "/login";
        })
        .catch((err) => {
          console.log(state, action);
          window.alert("아이디 조회에 실패하였습니다!", err);
        });
    },

    recoverPassword: (state, action) => {
      console.log(state, action);

      axios({
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("access-token")}`,
        },
        method: "PATCH",
        url: "https://302e4c3d-b687-4f75-a816-519ec683328d.mock.pstmn.io/api/recover/password",
        data: {
          email: action.payload.email
        },
      })
        .then((res) => {
          console.log("recoverId :", res)
          window.alert("이메일이 발송 되었습니다!");
          window.location.href = "/login";
        })
        .catch((err) => {
          console.log(state, action);
          window.alert("이메일 발송에 실패하였습니다!(password)", err);
        });
    },
  },
});

export const { recoverId, recoverPassword } = recoverSlice.actions;

export default recoverSlice.reducer;
