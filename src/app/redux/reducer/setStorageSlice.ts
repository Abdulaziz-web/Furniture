"use client";
import { createSlice } from "@reduxjs/toolkit";

interface product {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  rate: number;
  price: number;
  size: string;
  color: string;
  __v: number;
}

interface setState {
  products: product[];
}

const initialState: setState = {
  products: [],
};

export const setLocal = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      localStorage.setItem("products", JSON.stringify({ products: [...state.products, action.payload] }))
      return { products: [...state.products, action.payload] }
    },
    addCount: (state, acton) => {
    },
    deleteProduct: (state, action) => {
      const getedProducts = JSON.parse(localStorage.getItem("products"))
      const index = getedProducts?.products?.findIndex((item) => item.id == action.payload)
      getedProducts?.products?.splice(index, 1)
      localStorage.setItem("products", JSON.stringify(getedProducts))
    }
  },
});

export const { addProduct, addCount, deleteProduct } = setLocal.actions;
export default setLocal.reducer;
