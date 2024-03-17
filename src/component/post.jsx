import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataPost = () => {
    const [posts, setPosts] = useState([])
    const [isCreated, setIsCreated] = useState(false)
    const [formData, setFormData] = useState({
        body: '',
        title: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        setIsCreated(false)
        axios.post('https://jsonplaceholder.typicode.com/posts',
            JSON.stringify({
                title: formData.title,
                body: formData.body,
                userId: 1,
            }))
            .then(function (response) {
                // console.log(response)
                setIsCreated(true)
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    const handleChange = (e) => {
        const name = e.target.name;
        setFormData({
            ...formData,
            [name]: e.target.value
        })

    }


    const onUpdate = () => {
        // axios({
        //     method: 'post',
        //     url: '/user/12345',
        //     data: {
        //         firstName: 'Fred',
        //         lastName: 'Flintstone'
        //     }
        // })


        axios.put('https://jsonplaceholder.typicode.com/posts/1',
            JSON.stringify({
                title: formData.title,
                body: formData.body,
                userId: 1,
            }),
            {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            },
        )
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (res) {
                // handle success
                setPosts(res.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [isCreated])

    console.log(formData)

    return (
        <div>
            <h2>DataPost</h2>

            <form onSubmit={handleSubmit}>
                <input type='text' name='title' value={formData.title} onChange={handleChange} />
                <input type='text' name='body' value={formData.body} onChange={handleChange} />
                <input type='submit' />
            </form>
            <button onClick={onUpdate}>Update</button>
            {
                posts.map((data) => {
                    return (
                        <div key={data.id}>
                            <h3>{data.title}</h3>
                            <p>{data.body}</p>
                        </div>
                    )

                })
            }

        </div>
    )
}

export default DataPost