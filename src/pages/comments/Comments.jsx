import React from 'react'
import { useParams } from 'react-router-dom'

const Comments = () => {
  const {postId} = useParams()
  const [comment, setComment] = React.useState([])
  React.useEffect(() => {
      (
          async function () {
              const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
              try {
                  if (response.ok) {
                      const data = await response.json()
                      setComment(data)
                  }
              } catch (error) {
                  console.error(error);
              }
          }
      )()
  }, [])

  return (
    <div>
      <h2>Comments</h2>

      {comment.length > 0 && <ul>
        {
          comment.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))
        }
        </ul>}
    </div>
  )
}

export default Comments