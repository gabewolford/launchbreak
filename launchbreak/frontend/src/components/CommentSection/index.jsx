import { useState, useEffect } from "react"
import { postComment, getComments } from "../../../utils/backend"
import Comment from "../Comment"

export default function CommentSection({ launchId }) {
    // Save comments queried from the database in state
    const [comments, setComments] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        name: '',
        commentText: '',
        updatedAt: ''
    })

    // Query the database for all comments that pertain to this launch
    useEffect(() => {
        getComments(launchId)
            .then(comments => setComments(comments))
    }, [])


    // Update the form fields as the user types
    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    // Render a form that allows a user to create a comment on submit
    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    // Update the comments in the comment section after a database transaction
    function refreshComments() {
        getComments(launchId)
            .then(newCommentData => setComments(newCommentData))
    }

    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // clear the form
        setCreateFormData({
            name: '',
            commentText: ''
        })
        // close the form
        setShowCreateForm(false)
        // create the comment in the backend
        postComment({ ...createFormData, launchId: launchId })
            .then(() => refreshComments())
    }


    // conditionally render comments
    let commentElements = [<p className="text-lg" key='0'>No comments yet.</p>]
    if (comments.length > 0) {
        commentElements = comments.map(comment => {
            return <Comment
                key={comment._id}
                data={comment}
                refreshComments={refreshComments}
            />
        })
    }

    // conditionally display the text of the create form button
    let btnText = 'Leave A Comment'
    if (showCreateForm) {
        btnText = 'Cancel'
    }

    return (
        <div className="mb-6">
                <div className="">
                    <button
                        onClick={toggleCreateForm}
                        className="bg-blue-900 hover:bg-blue-800 rounded-md text-white text-md font-bold py-2 px-4 mb-2 cursor-pointer relative right-0"
                    >
                        {btnText}
                    </button>
                    {
                            showCreateForm && <form
                                onSubmit={handleSubmit}
                                className="rounded-lg text-right mt-3 md:max-w-[50vw]">
                                <input
                                    name="name"
                                    className="px-2 py-1 w-full text-sm bg-white text-black rounded-md"
                                    placeholder="Your name"
                                    value={createFormData.name}
                                    onChange={handleInputChange}
                                />
                                <br />
                                <textarea
                                    name="commentText"
                                    className="p-2 my-2 h-[100px] w-full text-sm bg-white border-none text-black rounded-md"
                                    placeholder="Leave a comment."
                                    value={createFormData.commentText}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="submit"
                                    className="text-white hover:bg-gray-500 font-bold text-sm py-2 px-4 bg-gray-600 rounded cursor-pointer">
                                    Submit
                                </button>
                            </form>
                        }
                    <div className='mt-8 md:max-w-[50vw]'>
                        {commentElements}
                    </div>
            </div>
        </div>
    )
}