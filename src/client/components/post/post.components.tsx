import { IPost } from "../../providers/store/models/IPost";
import { postAPI } from "../../providers/store/services/PostService";
import { PostItem } from "../post-item/post-item.components";
import { StyledPostTitle } from "./post.styled";

export const Post = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);
    const [createPost] = postAPI.useCreatePostMutation();
    const [deletePost] = postAPI.useDeletePostMutation();
    const [updatePost] = postAPI.useUpdatePostMutation();

    const handlerCreate = () => {
        const title = prompt()
        createPost({title, body: title} as IPost)
    }

    const handlerRemove = (post: IPost) => { deletePost(post) }

    const handlerUpdate = (post: IPost) => { updatePost(post) }

    return(
        <div>
            <button onClick={handlerCreate}>Add new Post</button>
            {isLoading && <h3>Идет загрузка...</h3>}
            {error && <h3>Ошибка загрузки...</h3>}
            <StyledPostTitle>Post</StyledPostTitle>
            {posts && posts.map((item) => <PostItem key={item.id} post={item} remove={handlerRemove} update={handlerUpdate}/>)}
        </div>
    )
}