import useSWR from "swr"

const fetchData = async()=>{
    const res = await fetch('http://localhost:4000/dashboard')
    const data = res.json()
    return data
}

const Dashboard = () =>{
    
    const  {data,error} = useSWR('dashboard',fetchData)
    if(!data)return 'Loading...'
    if(error)return 'an error'
    return(
        <>
            <h2>Dashboard</h2>
            <h4>posts:- {data.posts}</h4>
            <h4>likes:- {data.likes}</h4>
            <h4>followers:- {data.followers}</h4>
            <h4>following:- {data.following}</h4>
        </>
    )
}
   
    export default Dashboard


// export const getServerSideProps = async () => {

// }