
function News({ newsData }) {
    return (
      <div>
        {
            newsData.map(res=>{
                return  <div key={res.id}>
                            <span>{res.id} </span>
                            <span>{res.title} </span>
                            <span> | {res.category}</span>
                        </div>
            })
        }
      </div>
    )
  }
  export default News


  export const  getServerSideProps = async () => {
    const res = await fetch('http://localhost:4000/news')
    const d = await res.json()
    return {
        props:{
            newsData:d
        }
    }
  }