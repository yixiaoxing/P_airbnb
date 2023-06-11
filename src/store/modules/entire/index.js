import { getEntireRoomsData } from "@/service/modules/entire";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEntireData = createAsyncThunk(
  "fetchEntireData",
  async (payload = 0, { dispatch, getState }) => {
    dispatch(changeCurrentPageAction(payload));
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomsData(payload);
    dispatch(changeRoomListAction(res.list));
    dispatch(changeTotalCountAction(res.totalCount));
    dispatch(changeIsLoadingAction(false));
  }
);

const entireSlice = createSlice({
  name: "entire",
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0,
    isLoading: false,
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeRoomListAction(state, { payload }) {
      state.roomList = payload;
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload;
    },
    changeIsLoadingAction(state, { payload }) {
      state.isLoading = payload;
    },
  },
});

export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction,
  changeIsLoadingAction,
} = entireSlice.actions;
export default entireSlice.reducer;
