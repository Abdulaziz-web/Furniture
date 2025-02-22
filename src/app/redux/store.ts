"use client"
import { configureStore } from "@reduxjs/toolkit"
import setLocal from "./reducer/setStorageSlice"


export const store = configureStore({
  reducer: {
    products: setLocal
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
