import { IPost } from "../../providers/store/models/IPost";
import { postAPI } from "../../providers/store/services/PostService";
import { PostItem } from "../post-item/post-item.components";
import { useModals } from "../../providers/modals/modals.providers";
import {
    StyledCreateButton,
    StyledLoading,
    StyledLoader,
    StyledError,
} from "./post.styled";

export const Post = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);
    const { openCreatePostModal } = useModals();
    const [deletePost] = postAPI.useDeletePostMutation();

    const handlerRemove = (post: IPost) => { deletePost(post) }

    return(
        <div>
            {isLoading && <StyledLoading><StyledLoader /></StyledLoading>}
            {error && <StyledError>Ошибка загрузки...</StyledError>}
            {posts && 
                <>
                    <StyledCreateButton onClick={openCreatePostModal}>Add new Post</StyledCreateButton>
                    {posts.map((item) => <PostItem key={item.id} post={item} remove={handlerRemove}/>)}
                </>
            }
        </div>
    )
}