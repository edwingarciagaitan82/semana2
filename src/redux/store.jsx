import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./userSlice";
import categoriesSlice from "./categoriesSlice";

//cargando el state en el storage
const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;     }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error('Could not load state', error);
      return undefined;
    }
  };

  const preloadedState = loadState()

export const store = configureStore({
    reducer : {
        user : userSlice,
        categories: categoriesSlice,
    },
    preloadedState
})

//salvando en el localStorage
const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (error) {
      console.error('Could not save state', error);
    }
  };

  store.subscribe(() => {
    saveState(store.getState());
    console.log("store salvado")
  });

export  default store