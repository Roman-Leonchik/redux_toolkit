import axios from "axios";
import { IUser } from "../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching());
        const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
        dispatch(userSlice.actions.userFetchingSuccess(response.data))
    } catch (e: any) {
        dispatch(userSlice.actions.userFetchingError(e.message))
    }
}