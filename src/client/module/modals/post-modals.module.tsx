import React from "react";
import {
    StyledModals,
    StyledCloseModal,
} from './post-modals.styled';

interface IProps {
    closeModal: () => void;
}

export const PostModals: React.FC<IProps> = ({ children, closeModal }) => {

    return(
        <StyledModals>
            <StyledCloseModal onClick={closeModal}/>
            {children}
        </StyledModals>
    )

}