import React, { useState } from "react";
import { postAPI } from "../../../providers/store/services/PostService";
import { IPost } from "../../../providers/store/models/IPost";
import { PostModals } from "../post-modals.module";
import {
    StyledInputWrapp,
    StyledInputText,
    StyledText,
    StyledCreateButton,
} from "./create-post.styled";

interface IProps {
    closeModal: () => void;
}

export const CreatePostModals: React.FC<IProps> = ({ closeModal }) => {
    const [ valueTitle, setValueTitle ] = useState("");
    const [ valueBody, setValueBody ] = useState("");
    const [createPost] = postAPI.useCreatePostMutation();

    const handlerTitleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueTitle(event.target.value);
    };

    const handlerBodyValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueBody(event.target.value);
    };

    const handlerCreatePost = () => {
        closeModal();
        createPost({
            title: valueTitle,
            body: valueBody
        } as IPost)
    }

    return(
        <PostModals closeModal={closeModal} titleModal="Create post">
            <StyledInputWrapp>
                <StyledText>Title</StyledText>
                <StyledInputText type="text" onInput={handlerTitleValue} value={valueTitle}/>
            </StyledInputWrapp>
            <StyledInputWrapp>
                <StyledText>Body</StyledText>
                <StyledInputText type="text" onInput={handlerBodyValue} value={valueBody}/>
            </StyledInputWrapp>
            <StyledCreateButton type="submit" value="Create post" onClick={handlerCreatePost}/>
        </PostModals>
    )

}