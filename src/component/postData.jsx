import React from 'react'
import { useDispatch } from 'react-redux'

const PostData = () => {
    const dispatch = useDispatch()

    const fetchPost = () => {
    }

    return (
        <div>
            <h1> Fetching post data</h1>
            <button onClick={fetchPost}>Fetch post</button>
        </div>
    )
}

export default PostData