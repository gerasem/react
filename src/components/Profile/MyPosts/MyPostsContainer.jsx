import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()
                let addNewPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addNewPost}
                    posts={state.profilePage.posts}
                    newPost={state.profilePage.textareaValueText}
                />
            }

            }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer
