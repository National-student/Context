import React from 'react'
import { useParams } from 'react-router-dom'

const UserSingle = () => {
    
    const [single, setSingle] = React.useState({})

    const {userId} = useParams();

    React.useEffect(() => {
        (
            async function () {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/"+userId)
                try {
                    if (response.ok) {
                        const data = await response.json()
                        setSingle(data)
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        )()
    }, [])


  return (
    <div>
        <h2>{single.name}</h2>
        <a href="#">{single.email}</a>
    </div>
  )
}

export default UserSingle