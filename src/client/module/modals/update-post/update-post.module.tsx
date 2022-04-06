import React, { useState } from "react";
import { postAPI } from "../../../providers/store/services/PostService";
import { IPost } from "../../../providers/store/models/IPost";
import { PostModals } from "../post-modals.module";
import {
    StyledInputWrapp,
    StyledText,
    StyledInputText,
    StyledCreateButton,
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
        <PostModals closeModal={closeModal} titleModal="Change post">
            <StyledInputWrapp>
                <StyledText>Title</StyledText>
                <StyledInputText type="text" onInput={handlerTitleValue} value={valueTitle}/>
            </StyledInputWrapp>
            <StyledInputWrapp>
                <StyledText>Body</StyledText>
                <StyledInputText type="text" onInput={handlerBodyValue} value={valueBody}/>
            </StyledInputWrapp>
            <StyledCreateButton type="submit" value="Change post" onClick={handlerUpdatePost}/>
        </PostModals>
    )

}