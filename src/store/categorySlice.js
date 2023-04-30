import { createSlice } from "@reduxjs/toolkit";
import { base_URL } from "../utils/apiURL";
import { Status } from "../utils/status";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: [],
    status: Status.IDLE,
    catProductAll: [],
    catProductAllStatus: Status.IDLE,
    catProductSingle: [],
    catProductSingleStatus: Status.IDLE,
  },

  reducers: {
    setCategories(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setCategoriesProductAll(state, action) {
      state.catProductAll.push(action.payload);
    },
    setCategoriesStatusAll(state, action) {
      state.catProductAllStatus = action.payload;
    },
    setCategoriesProductSingle(state, action) {
      state.catProductSingle = action.payload;
    },
    setCategoriesStatusSingle(state, action) {
      state.catProductSingleStatus = action.payload;
    },
  },
});

export const {
  setCategories,
  setStatus,
  setCategoriesProductAll,
  setCategoriesStatusAll,
  setCategoriesProductSingle,
  setCategoriesStatusSingle,
} = categorySlice.actions;
export default categorySlice.reducer;

export const fetchCategories = () => {
  return async function fetchCategoryThunk(dispatch) {
    dispatch(setStatus(Status.LOADING));
    try {
      const response = await fetch(`${base_URL}categories`);
      const data = await response.json();
      dispatch(setCategories(data.slice(0, 5)));
      dispatch(setStatus(Status.IDLE));
    } catch (error) {
      dispatch(setStatus(Status.ERROR));
    }
  };
};

export const fetchProductsByCategory = (categoryID, dataType) => {
  return async function fetchCategoryProductThunk(dispatch) {
    if (dataType === "all") dispatch(setCategoriesStatusAll(Status.LOADING));
    if (dataType === "single")
      dispatch(setCategoriesStatusSingle(Status.LOADING));

    try {
      const response = await fetch(
        `${base_URL}categories/${categoryID}/products`
      );
      const data = await response.json();
      if (dataType === "all") {
        dispatch(setCategoriesProductAll(data.slice(0, 10)));
        dispatch(setCategoriesStatusAll(Status.IDLE));
      }
      if (dataType === "single") {
        dispatch(setCategoriesProductSingle(data.slice(0, 20)));
        dispatch(setCategoriesStatusSingle(Status.IDLE));
      }
    } catch (error) {
      dispatch(setCategoriesStatusAll(Status.ERROR));
    }
  };
};
