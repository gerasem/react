import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addNewPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts
        updateNewPostText={onPostChange}
        addPost={addNewPost}
        posts={state.profilePage.posts}
        newPost={state.profilePage.textareaValueText}
    />
}
export default MyPostsContainer
