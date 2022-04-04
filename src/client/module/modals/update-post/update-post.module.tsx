import React, { useState } from "react";
import { postAPI } from "../../../providers/store/services/PostService";
import { IPost } from "../../../providers/store/models/IPost";
import { PostModals } from "../post-modals.module";
import {
    StyledInputWrapp,
} from "../create-post/create-post.styled";

interface IProps {
    closeModal: () => void;
    post: IPost | {};
}

export const UpdatePostModals: React.FC<IProps> = ({ closeModal, post }) => {
    const [ valueTitle, setValueTitle ] = useState("");
    const [ valueBody, setValueBody ] = useState("");
    const [ updatePost ] = postAPI.useUpdatePostMutation();

    const handlerTitleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueTitle(event.target.value);
    };

    const handlerBodyValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueBody(event.target.value);
    };

    const handlerUpdatePost = () => {
        closeModal();
        updatePost({
            ...post,
            title: valueTitle,
            body: valueBody
        } as IPost)
    }

    return(
        <PostModals closeModal={closeModal} titleModal="Change modal">
            <StyledInputWrapp>
                Title
                <input type="text" onInput={handlerTitleValue} value={valueTitle}/>
            </StyledInputWrapp>
            <StyledInputWrapp>
                Body
                <input type="text" onInput={handlerBodyValue} value={valueBody}/>
            </StyledInputWrapp>
            <input type="submit" value="Change post" onClick={handlerUpdatePost}/>
        </PostModals>
    )

}