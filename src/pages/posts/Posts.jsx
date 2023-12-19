import React from 'react'
import { Link } from 'react-router-dom'
import { Language } from '../language/Language'

const Posts = ({lang}) => {
    const [post, setPost] = React.useState([])
    React.useEffect(() => {
        (
            async function () {
                const response = await fetch(import.meta.env.VITE_API_URL+"/posts")
                try {
                    if (response.ok) {
                        const data = await response.json()
                        setPost(data)
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        )()
    }, [])
  return (
    <div>
        <h1>{Language[lang].header.post}</h1>
        {
            post.length > 0 && <ul>
                {post.map(item => (
                    <li key={item.id}>
                        <Link to={`/posts/${item.id}/comments`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        }

    </div>
  )
}

export default Posts