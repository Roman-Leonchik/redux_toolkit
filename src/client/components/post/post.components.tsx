import { IPost } from "../../providers/store/models/IPost";
import { postAPI } from "../../providers/store/services/PostService";
import { PostItem } from "../post-item/post-item.components";
import { useModals } from "../../providers/modals/modals.providers";
import { StyledPostTitle } from "./post.styled";

export const Post = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);
    const { openCreatePostModal } = useModals();
    const [deletePost] = postAPI.useDeletePostMutation();

    const handlerRemove = (post: IPost) => { deletePost(post) }

    return(
        <div>
            <StyledPostTitle>Post</StyledPostTitle>
            {isLoading && <h3>Идет загрузка...</h3>}
            {error && <h3>Ошибка загрузки...</h3>}
            {posts && 
                <>
                    <button onClick={openCreatePostModal}>Add new Post</button>
                    {posts.map((item) => <PostItem key={item.id} post={item} remove={handlerRemove}/>)}
                </>
            }
        </div>
    )
}