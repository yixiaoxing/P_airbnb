import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./modules/main";
import entireReducer from "./modules/entire";
import homeReducer from "./modules/home";
import detailReducer from "./modules/detail";
const store = configureStore({
  reducer: {
    entire: entireReducer,
    home: homeReducer,
    detail: detailReducer,
    main: mainReducer,
  },
});

export default store;
