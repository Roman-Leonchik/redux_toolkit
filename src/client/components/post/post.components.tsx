import React, { useState } from "react";
import { IPost } from "../../providers/store/models/IPost";
import { postAPI } from "../../providers/store/services/PostService";
import { PostItem } from "../post-item/post-item.components";
import { useModals } from "../../providers/modals/modals.providers";
import { Paginations } from "src/client/module/paginations/paginations.module";
import {
    StyledCreateButton,
    StyledLoading,
    StyledLoader,
    StyledError,
} from "./post.styled";

export const Post = () => {
    const [ page, setPage ] = useState(1);
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery();
    const { data: postPage } = postAPI.useFetchPagePostsQuery(page);
    const { openCreatePostModal } = useModals();
    const [deletePost] = postAPI.useDeletePostMutation();
    const pagesAll = posts!== undefined ? Math.ceil(posts?.length/3) : 1;

    const handlerRemove = (post: IPost) => { deletePost(post) }

    const handlerNextPage = () => {
        const next = page+1;
        if (page > next) return
        setPage(next)
    }

    const handlerPrevPage = () => {
        const prev = page - 1;
        if (prev < 0) return
        setPage(prev)
    }

    return(
        <div>
            {isLoading && <StyledLoading><StyledLoader /></StyledLoading>}
            {error && <StyledError>Ошибка загрузки...</StyledError>}
            {posts && 
                <>
                    <StyledCreateButton onClick={openCreatePostModal}>Add new Post</StyledCreateButton>
                    {postPage?.map((item) => <PostItem key={item.id} post={item} remove={handlerRemove}/>)}
                    {pagesAll > 1 && 
                        <Paginations
                            pagesAll={pagesAll}
                            page={page}
                            prev={handlerPrevPage}
                            next={handlerNextPage}
                        />
                    }
                </>
            }
        </div>
    )
}