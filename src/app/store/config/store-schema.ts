import { Dispatch } from "@reduxjs/toolkit";

export interface ThunkConfig<T> {
    rejectValue: T;
    dispatch?: Dispatch;
}

export interface InitialState<T> {
  data: T,
  isError: boolean,
  isLoading: boolean
}