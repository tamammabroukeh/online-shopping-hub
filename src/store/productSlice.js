import { createSlice } from "@reduxjs/toolkit";
import { base_URL } from "../utils/apiURL";
import { Status } from "../utils/status";

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: Status.IDLE,
  },

  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = () => {
  return async function fetchProductThunk(dispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await fetch(`${base_URL}products`);
      const data = await response.json();
      dispatch(setProducts(data));
      dispatch(setStatus(Status.IDLE));
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
};
