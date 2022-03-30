import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../providers/store/hooks/redux";
import { fetchUsers } from "../../providers/store/reducers/ActionCreator";
import {
    StyledList,
    StyledContainer,
} from "./list.styled";

export const List: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users } = useAppSelector( state => state.userReducer )

    useEffect( ()=> {
        dispatch(fetchUsers())
    }, [])

    return(
        <StyledList>
            <StyledContainer>
                {JSON.stringify(users, null, 2)}
            </StyledContainer>
        </StyledList>
    )
}