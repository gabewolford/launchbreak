import { useState } from "react"
import { updateComment, deleteComment } from "../../../utils/backend"

export default function Comment({ data, refreshComments }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        name: data.name,
        commentText: data.commentText
    })

    // Update the form fields as the user types
    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }

    // Execute form submission logic
    function handleSubmit(event) {
        // prevent the page from reloading
        event.preventDefault()
        // close the form
        setShowEditForm(false)
        // update the comment in the backend
        updateComment(editFormData, data._id)
            .then(() => refreshComments())
    }

    // Delete a comment
    function handleDelete() {
        deleteComment(data._id)
            .then(() => refreshComments())
    }

    const options = { 
        weekday: 'long', 
        year: 'numeric',
        month: 'long', 
        day: 'numeric' 
    }


    //  Default JSX of each comment
    let commentElement = <div className="p-4 mb-4 bg-gray-500 rounded-lg">
                            <p className="text-gray-300 text-xs mb-2">{new Date(data.updatedAt).toLocaleString()}</p>
                            <p className="font-bold bg-gray-500">{data.name}</p>
                            <p className="my-2 bg-gray-500">{data.commentText}</p>
                            <div className="flex justify-end bg-gray-500">
                                <button
                                    onClick={() => { setShowEditForm(true) }}
                                    className="bg-gray-600 hover:bg-gray-400 rounded-md text-white text-sm font-bold py-2 px-4 cursor-pointer mr-2">
                                    Edit
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-600 hover:bg-red-500 rounded-md text-white text-sm font-bold py-2 px-4">
                                    Delete
                                </button>
                            </div>
                        </div>

    // Change the comment to a form if the showEditForm state variable is true
    if (showEditForm) {
        commentElement = <form
            onSubmit={handleSubmit}
            className="my-4 rounded-md md:max-w-[50vw] mx-auto text-right">
            <input
                name="name"
                className="px-2 py-1 w-full bg-white text-black border-none rounded-md"
                placeholder="Your name"
                value={editFormData.name}
                onChange={handleInputChange}
            />
            <br />
            <textarea
                name="commentText"
                className="p-2 my-2 h-[100px] w-full bg-white text-black border-none rounded-md"
                placeholder="Share your thoughts!"
                value={editFormData.commentText}
                onChange={handleInputChange}
            />
            <div className="">
                <button
                    onClick={() => { setShowEditForm(false) }}
                    className="bg-gray-700 hover:bg-gray-800 rounded-md text-white text-sm font-bold py-2 px-4 cursor-pointer mr-2">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-blue-900 hover:bg-gray-800 rounded-md text-white text-sm font-bold py-2 px-4 cursor-pointer">
                    Submit
                </button>
            </div>
        </form>
    }

    return commentElement
}