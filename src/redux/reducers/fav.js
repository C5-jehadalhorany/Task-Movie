import { createSlice } from "@reduxjs/toolkit";
const fav = createSlice({
  name: "fav",
  initialState: {
    fav: JSON.parse(localStorage.getItem("fav")) || [],
  },
  reducers: {
    addFav: (state, action) => {
      state.fav = JSON.parse(localStorage.getItem("fav")) || [];
      if (!state.fav.includes(action.payload)) {
        state.fav.push(action.payload);
        localStorage.setItem("fav", JSON.stringify(state.fav));
      }
    },
    deleteFav: (state, action) => {
      state.fav = [];
      localStorage.setItem("fav", JSON.stringify(state.fav));
    },
    removeFromFav: (state, action) => {
      state.fav = state.fav.filter((element, index) => {
        return element.id != action.payload;
      });
      localStorage.setItem("fav", JSON.stringify(state.fav));
    },
  },
});
export const {

  addFav,
  deleteFav,
  removeFromFav,


} = fav.actions;

export default fav.reducer;