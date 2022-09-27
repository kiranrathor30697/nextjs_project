import User from "../components/User"

function user({ users }) {
  return <>
          <h1>Users</h1>
          {
            users.map(user=>{
              return  <div key={user.id}>
                        <User user={user} />
                      </div>
            })
          }
        </>
}

export default user

 export const getStaticProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const mydata = await data.json()
  return{
    props:{
      users:mydata
    }
  }
}