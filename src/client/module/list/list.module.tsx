import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../providers/store/hooks/redux";
import { fetchUsers } from "../../providers/store/reducers/ActionCreator";
import {
    StyledList,
    StyledContainer,
} from "./list.styled";

export const List: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users, isLoading, error } = useAppSelector( state => state.userReducer )

    useEffect( ()=> {
        dispatch(fetchUsers())
    }, [])

    return(
        <StyledList>
            <StyledContainer>
                {isLoading && <h2>Идет загрузка</h2>}
                {error && <h2>{error}</h2>}
                {JSON.stringify(users, null, 2)}
            </StyledContainer>
        </StyledList>
    )
}