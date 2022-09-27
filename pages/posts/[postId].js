import Link from "next/link"
import { useRouter } from "next/router"

const Post = ({ posts}) =>{

    return  <>
                <h2>Post Data</h2>
                <p>{posts.id}</p>
                <p>{posts.title}</p>
                <p>{posts.body}</p>
            </>
}
export default Post

export async function getStaticPaths(){
    return {
        paths:[
            {
                params:{postId:"1"}
            },{
                params:{postId:"2"}
            },{
                params:{postId:"3"}
            },{
                params:{postId:"4"}
            },{
                params:{postId:"5"}
            },{
                params:{postId:"6"}
            },{
                params:{postId:"7"}
            },{
                params:{postId:"8"}
            },{
                params:{postId:"9"}
            },{
                params:{postId:"10"}
            }
        ],
        fallback:false
    }
}

export  const getStaticProps = async (context) => {
    const {params} = context
    console.log('=======',params)

    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        data = await data.json()
    return  {
        props:{
            posts:data
        }
    }
                
}














// function Post ({post}){
//     return  <div>
//                 <p>{post.id}</p>
//                 <p>{post.tittle}</p>
//                 <p>{post.body}</p>
//             </div>
// }

// export default Post

// export async function getStaticPaths(){
//     return {
//         paths:[
//             {
//                 params:{postId:"1"}
//             },{
//                 params:{postId:"2"}
//             },{
//                 params:{postId:"3"}
//             },{
//                 params:{postId:"4"}
//             }
//         ],
//         fallback:false
//     }
// }

// export async function getStaticProps(context){
//     const { params } = context
//     const  response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//     const data = await response.json()
//     console.log(data)
//     return {
//         props:{
//             post:data
//         }
//     }
// }