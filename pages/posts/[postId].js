// fallback : blocking

import { useRouter } from "next/router"

const Post = ({ posts}) =>{

    const router = useRouter()
    if(router.isFallback){
        return <h2>Loading...</h2>
        
    }

    return  <>
                <h2>Post Data</h2>
                <p>{posts.id}</p>
                <p>{posts.title}</p>
                <p>{posts.body}</p>
            </>
}
export default Post

export async function getStaticPaths(){
    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
        data = await data.json()
        const paths = data.map(post=>{
            return{
                params:{
                    postId:`${post.id}`
                }
            }
        })
        
    return {
      
        paths,
        // fallback:false
        fallback:true
    }
}

export  const getStaticProps = async (context) => {
    const {params} = context

    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        data = await data.json()

        if(!data.id){
            return{
                notFound:true
            }
        }
    return  {
        props:{
            posts:data
        },
        // revalidate:10,
    }
                
}





// fallback : false/true

// import { useRouter } from "next/router"

// const Post = ({ posts}) =>{

//     const router = useRouter()
//     if(router.isFallback){
//         return <h2>Loading...</h2>
        
//     }

//     return  <>
//                 <h2>Post Data</h2>
//                 <p>{posts.id}</p>
//                 <p>{posts.title}</p>
//                 <p>{posts.body}</p>
//             </>
// }
// export default Post

// export async function getStaticPaths(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/posts')
//         data = await data.json()
//         const paths = data.map(post=>{
//             return{
//                 params:{
//                     postId:`${post.id}`
//                 }
//             }
//         })
        
//     return {
      
//         paths,
//         // fallback:false
//         fallback:true
//     }
// }

// export  const getStaticProps = async (context) => {
//     const {params} = context

//     let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
//         data = await data.json()

//         if(!data.id){
//             return{
//                 notFound:true
//             }
//         }
//     return  {
//         props:{
//             posts:data
//         }
//     }
                
// }











// const Post = ({ posts}) =>{

//     return  <>
//                 <h2>Post Data</h2>
//                 <p>{posts.id}</p>
//                 <p>{posts.title}</p>
//                 <p>{posts.body}</p>
//             </>
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
//             },{
//                 params:{postId:"5"}
//             },{
//                 params:{postId:"6"}
//             },{
//                 params:{postId:"7"}
//             },{
//                 params:{postId:"8"}
//             },{
//                 params:{postId:"9"}
//             },{
//                 params:{postId:"10"}
//             }
//         ],
//         fallback:false
//     }
// }

// export  const getStaticProps = async (context) => {

//     let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
//         data = await data.json()
//     return  {
//         props:{
//             posts:data
//         }
//     }
                
// }

