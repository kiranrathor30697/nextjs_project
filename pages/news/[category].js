const newsCategory = ({category,articles}) => {
    return  <>
                <h1>Showing the news of {category}</h1>
                {
                    articles.map(cat_data=>{
                        return  <div key={cat_data.id}>
                                    <strong><span>{cat_data.id}</span></strong>
                                    <strong> <span>{cat_data.title} </span></strong>
                                    <strong><span>{cat_data.category}   </span></strong>
                                </div>
                    })
                }
            </>
}

export default newsCategory


 export async function getServerSideProps(context){
    const { params } = context
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    return{
        props:{
            articles:data,
            category
        }
    }
}