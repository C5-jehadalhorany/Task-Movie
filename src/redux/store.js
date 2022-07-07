import { configureStore } from "@reduxjs/toolkit";
import fav from "./reducers/fav"


export default configureStore({
  reducer: {
    fav: fav,
 
  },
});
