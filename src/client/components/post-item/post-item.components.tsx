import React from "react";
import { IPost } from "../../providers/store/models/IPost";
import {
    StyledPostItem,
    StyledPostTitle,
    StyledPostDelete,
} from "./post-item.styled";

interface IProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

export const PostItem: React.FC<IProps> = ({post, remove, update}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation();
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || "";
        update({...post, title})
    }

    return(
        <StyledPostItem onClick={handleUpdate}>
            <StyledPostTitle>{post.title}</StyledPostTitle>
            <p>{post.body}</p>
            <StyledPostDelete onClick={handleRemove}>Delete</StyledPostDelete>
        </StyledPostItem>
    )
}