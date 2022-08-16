import { ActionTypes } from "../constants/action-types";
import fetchApi from "../../api/fetchApi";

export const fetchData = () => async (dispatch) =>{
      const response = await fetchApi.get("/cars");
      dispatch({type: ActionTypes.FETCH_DATA, payload: response.data})
      dispatch({type: ActionTypes.CAR_SEARCH, payload: response.data})
  }

export const fetchDataDetail = (id) => async (dispatch) =>{
      const response = await fetchApi.get(`/cars/${id}`);
      dispatch({type: ActionTypes.DETAIL_CARS, payload: response.data})
  }

export const removeSelectedCars = () =>{
  return {
    type: ActionTypes.REMOVE_DETAIL_CARS,
  };
}

export const setSearch = (cars) =>{
  return {
    type: ActionTypes.CAR_SEARCH,
    payload: cars,
  };
}

export const setButton = (btn) =>{
  return {
    type: ActionTypes.SET_BUTTON,
    payload: btn,
  };
}




