import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "success",
};

const STATUS = {
  SUCCESS: 'success',
  LOADING: 'loading',
  ERROR: 'error',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(setStatus(STATUS.LOADING));

    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
      console.error('Error fetching data:', error);
    }
  };
};
