import { useState } from "react"

const Comments = () => {

    const [comments,setComments] = useState([])

    const [data,setData] = useState('')

    const fetchComments = async () => {
        const res = await fetch(`/api/comments`)
        const data = await res.json()
        setComments(data)
    }

    const postComment = async () => {
        const res = await fetch(`/api/comments`,{
            method:"POST",
            body:JSON.stringify({data}),
            headers:{
                "content-Type":"application/json"
            }
        })
        const commentData = await res.json()
    }

    const handleDelete = async (comm_id) => {
        const res = await fetch(`/api/comments/${comm_id}`,{
            method:"DELETE"
        })
        const deleteCom = await res.json()
        console.log('deleteCom :>> ', deleteCom);
        fetchComments()
    }

    return(
            <>
                <button onClick={fetchComments}>Fetch Comments</button>
                <br />
                <br />

                <input 
                    type="text"
                    onChange={(e=>setData(e.target.value))}
                />

                <button onClick={postComment}>Post Comments</button>


                {
                    comments.map(cv=>{
                        return(
                            <div key={cv.id}>
                                <span>{cv.id}</span>&nbsp;&nbsp;
                                <span>{cv.text}</span>
                                <button onClick={()=>{handleDelete(cv.id)}}>Delete</button>
                            </div>
                        )
                    })
                }
            </>
        )
}
export default Comments
