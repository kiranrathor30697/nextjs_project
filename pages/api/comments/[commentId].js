import { comments } from "../../../data/comments";

const commentId = (req,res) => {
    const { commentId } = req.query

    if(req.method === "GET"){
        const com_id =  comments.find(com_id => com_id.id === parseInt(commentId))
        res.status(200).json(com_id)

    }else if(req.method === "DELETE"){
        const delete_com_id =  comments.find(com_id => com_id.id === parseInt(commentId))

        const index = comments.findIndex(com_id=>com_id.id === parseInt(commentId))

        comments.splice(index,1)
        res.status(200).json(delete_com_id)
    }
    
}
export default commentId