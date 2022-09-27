import Link from "next/link"

const Post = ({ posts}) =>{

    return  <>
                <h2>Post Data</h2>
                {
                    posts.map(post=>{
                        return  <div key={post.id}>
                                    <Link href={`/posts/${post.id}`} passHref>{post.id}</Link> 
                                    <p> {post.title}</p>
                                    <p>{post.body}</p>
                                </div>
                    })
                }
            </>
}
export default Post

export  const getStaticProps = async () => {

    let data = await fetch('https://jsonplaceholder.typicode.com/posts')
        data = await data.json()
    return  {
        props:{
            posts:data.slice(0,10)
        }
    }
                
}

