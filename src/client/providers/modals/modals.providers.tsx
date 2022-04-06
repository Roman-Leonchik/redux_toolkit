import { createContext, useContext, useState } from "react";
import { IPost } from "../store/models/IPost";
import { CreatePostModals } from "../../module/modals/create-post/create-post.module";
import { UpdatePostModals } from "../../module/modals/update-post/update-post.module";

export interface IModalsContext {
    openCreatePostModal: () => void;
    closeCreatePostModal: () => void;
    openUpdatePostModal: (post: IPost) => void;
    closeUpdatePostModal: () => void;
}

const noop = () => {
    return undefined;
};

const defaultModalsContext: IModalsContext = {
    openCreatePostModal: noop,
    closeCreatePostModal: noop,
    openUpdatePostModal: noop,
    closeUpdatePostModal: noop,
};

const ModalsContext = createContext<IModalsContext>(defaultModalsContext);

export const useModals = () => {
    return useContext(ModalsContext);
};

export const ModalsProvider: React.FC = ({ children }) => {
    // NEW POST MODAL
    const [ isCreatePostVis,  setCreatePostVis] = useState(false);

    const openCreatePostModal = () => {
        setCreatePostVis(true);
    };

    const closeCreatePostModal = () => {
        setCreatePostVis(false);
    };

    // UPDATE POST MODAL
    const [ isUpdatePostVis,  setUpdatePostVis] = useState(false);
    const [ isPostInfo,  setPostInfo] = useState({});

    const openUpdatePostModal = (post: IPost) => {
        setPostInfo(post)
        setUpdatePostVis(true);
    };

    const closeUpdatePostModal = () => {
        setUpdatePostVis(false);
    };

    const context = {
        openCreatePostModal,
        closeCreatePostModal,
        openUpdatePostModal,
        closeUpdatePostModal,
    };

    return (
        <ModalsContext.Provider value={context}>
            {children}
            {isCreatePostVis && (
                <CreatePostModals closeModal={closeCreatePostModal}/>
            )}
            {isUpdatePostVis && (
                <UpdatePostModals closeModal={closeUpdatePostModal} post={isPostInfo}/>
            )}
        </ModalsContext.Provider>
    );
};
