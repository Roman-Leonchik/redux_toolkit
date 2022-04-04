import React from "react";
import { IPost } from "../../providers/store/models/IPost";
import { useModals } from "../../providers/modals/modals.providers";
import {
    StyledPostItem,
    StyledPostTitle,
    StyledButtonList,
    StyledButton,
} from "./post-item.styled";

interface IProps {
    post: IPost;
    remove: (post: IPost) => void;
}

export const PostItem: React.FC<IProps> = ({post, remove}) => {
    const { openUpdatePostModal } = useModals();

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post)
    }

    return(
        <StyledPostItem>
            <StyledPostTitle>{post.title}</StyledPostTitle>
            <p>{post.body}</p>
            <StyledButtonList>
                <StyledButton onClick={() => openUpdatePostModal(post)}>Change post</StyledButton>
                <StyledButton onClick={handleRemove} deleteColor>Delete</StyledButton>
            </StyledButtonList>
        </StyledPostItem>
    )
}