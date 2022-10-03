import { comments } from "../../../data/comments"

const Comments = (req,res) => {
    if(req.method === 'GET'){
        res.status(200).json(comments)
        
    }else if(req.method === "POST"){
        const data = req.body.data;
        const newComment = {
            id:Date.now(),
            text:data
        }
        comments.push(newComment)
        res.status(201).json(comments)

    }
}
export default Comments
