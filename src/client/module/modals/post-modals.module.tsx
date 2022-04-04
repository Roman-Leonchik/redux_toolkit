import React from "react";
import {
    StyledModals,
    StyledCloseModal,
    StyledModalsBack,
    StyledTitleContainer,
    StyledTitle,
} from './post-modals.styled';

interface IProps {
    closeModal: () => void;
    titleModal: string;
}

export const PostModals: React.FC<IProps> = ({ children, titleModal, closeModal }) => {

    return(
        <StyledModalsBack>
            <StyledModals>
                <StyledTitleContainer>
                    <StyledTitle>{titleModal}</StyledTitle>
                    <StyledCloseModal onClick={closeModal}/>
                </StyledTitleContainer>
                {children}
            </StyledModals>
        </StyledModalsBack>
    )

}