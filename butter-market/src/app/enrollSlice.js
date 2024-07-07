import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

//----------------------------------포스트맨 mock 서버에 없어서 통신 불가

const enrollSlice = createSlice({
  name: "enroll",
  initialState: {},
  reducers: {
    enrolling: (state, action) => {

      // FormData의 key 확인
      for (let key of action.payload.formData.keys()) {
        console.log(key);
      }

      // FormData의 value 확인
      for (let value of action.payload.formData.values()) {
        console.log(value);
      }

      axios({
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("access-token")}`,
        },
        method: "POST",
        url: "http://localhost:8080/api/post",
        data: action.payload.formData,
      })
        .then((res) => {
          console.log("정상 응답");
          console.log(res);
          window.alert("정상적으로 등록 되었습니다!");
          window.location.href = "/list";
        })
        .catch((err) => {
          console.log("에러 반환");
          window.alert("등록에 실패하였습니다!", err);
        });
    },
  },
});

export const { enrolling } = enrollSlice.actions;

export default enrollSlice.reducer;
