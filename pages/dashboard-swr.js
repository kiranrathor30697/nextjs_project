import useSWR from "swr"

const fetchData = async()=>{
    const res = await fetch('http://localhost:4000/dashboard')
    const data = res.json()
    return data
}

const Dashboard = () =>{
    
    const  {data,error} = useSWR('dashboard',fetchData)
    if(!data)return 'Loading'
    if(error)return 'an error'
    return(
        <>
            <div>Dashboard</div>
            <div>{data.posts}</div>
            <div>{data.likes}</div>
            <div>{data.followers}</div>
            <div>{data.following}</div>
        </>
    )
}
   
    export default Dashboard


// export const getServerSideProps = async () => {

// }