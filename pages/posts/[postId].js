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

