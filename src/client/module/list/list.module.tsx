import React from "react";
import { Post } from "../../components/post/post.components";
import {
    StyledList,
    StyledContainer,
} from "./list.styled";

export const List: React.FC = () => {

    return(
        <StyledList>
            <StyledContainer>
                <Post />
            </StyledContainer>
        </StyledList>
    )
}