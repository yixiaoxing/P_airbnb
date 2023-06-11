import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHightScoreData,
  getHomePlusData,
  getHotRecommendData,
  getLongForData,
} from "@/service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  (payload, { dispatch, getState }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHomeHightScoreData().then((res) => {
      dispatch(changeHightScoreInfoAction(res));
    });
    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    getHotRecommendData().then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
    getLongForData().then((res) => {
      dispatch(changeLongForAction(res));
    });
    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    hightScoreInfo: {},
    discountInfo: {},
    hotRecommend: {},
    longForInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHightScoreInfoAction(state, { payload }) {
      state.hightScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload;
    },
    changeLongForAction(state, { payload }) {
      state.longForInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHightScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendAction,
  changeLongForAction,
  changePlusInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;
