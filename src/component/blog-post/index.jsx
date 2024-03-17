import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPostFetch } from '../../redux/slice/postSlice';

const BlogPost = () => {
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostFetch())
    }, [dispatch])

    console.log('this is the data post:', posts)

    return (
        <div>
            <h1>Blog Posts</h1>
        </div>
    )
}

export default BlogPost