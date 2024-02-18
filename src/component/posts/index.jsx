import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/slice/productSlice";

const BlogPost = () => {
    // const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const posts = useSelector((state) => state.product.data)
    const dispatch = useDispatch()

    console.log(posts)

    // const fetchData = async () => {
    //     try {
    //         setIsLoading(true)
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //         setPosts(res.data)
    //         setIsLoading(false)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(function (response) {
    //             // handle success
    //             setIsLoading(true)
    //             setPosts(response.data)
    //             setIsLoading(false)

    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })

    // }, [])

    return (
        <div>
            <h1>Blog post</h1>
            <button onClick={() => dispatch(getProduct())}>Get data</button>

            {
                isLoading ? <p style={{ color: 'tomato' }}>Loading</p> :
                    posts?.map((post) => {
                        return (
                            <Fragment key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>

                            </Fragment>
                        )
                    })
            }
        </div>
    )
}

export default BlogPost