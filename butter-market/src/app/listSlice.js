import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    loadListSuccess: (state, action) => {
      // 받아온 데이터를 기존 state 배열과 합치는 방식으로 새로운 배열을 만듭니다.
      return action.payload;
    },
    loadListFailure: (state, action) => {
      // 에러 객체를 콘솔에 출력합니다.
      console.log("리스트 로드에 실패하였습니다!", action.error);
    },
  },
});

export const { loadListSuccess, loadListFailure } = listSlice.actions;

export const loadList = () => async (dispatch) => {
  try {
    // Axios 라이브러리를 사용하여 비동기적으로 API 요청을 보내고, 데이터를 받아옵니다.
    const response = await axios.get(
      "https://302e4c3d-b687-4f75-a816-519ec683328d.mock.pstmn.io/api/post"
    );
    console.log("리스트 로드 성공!");

    // 받아온 데이터를 loadListSuccess 액션에 전달하여 디스패치합니다.
    dispatch(loadListSuccess(response.data));
  } catch (error) {
    // 에러 객체를 loadListFailure 액션에 전달하여 디스패치합니다.
    dispatch(loadListFailure(error));
  }
};

export default listSlice.reducer;
