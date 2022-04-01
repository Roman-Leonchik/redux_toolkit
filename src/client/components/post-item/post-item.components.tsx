import React from "react";
import { IPost } from "../../providers/store/models/IPost";
import { useModals } from "../../providers/modals/modals.providers";
import {
    StyledPostItem,
    StyledPostTitle,
    StyledPostDelete,
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
            <StyledPostDelete onClick={handleRemove}>Delete</StyledPostDelete>
            <StyledPostDelete onClick={() => openUpdatePostModal(post)}>Change post</StyledPostDelete>
        </StyledPostItem>
    )
}