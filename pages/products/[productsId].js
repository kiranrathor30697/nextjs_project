const productDetails = ( { productDetails }) =>{
    return  <>
                <span>{productDetails.id}</span>&nbsp;&nbsp;
                <span>{productDetails.price}</span>&nbsp;&nbsp;
                <span>{String(productDetails.completed)}</span>&nbsp;&nbsp;
                <span>{productDetails.title}</span>&nbsp;&nbsp;
            </>
}
export default productDetails

export const getStaticPaths = () =>{
        return {
                    paths:[
                        {
                            params:{productsId:"1"}
                        },{
                            params:{productsId:"2"}
                        },{
                            params:{productsId:"3"}
                        },{
                            params:{productsId:"4"}
                        },{
                            params:{productsId:"5"}
                        },{
                            params:{productsId:"6"}
                        },{
                            params:{productsId:"7"}
                        },{
                            params:{productsId:"8"}
                        },{
                            params:{productsId:"9"}
                        },{
                            params:{productsId:"10"}
                        }
                    ],
                    fallback:false
                }
    }


export const getStaticProps = async (context) => {
    const {params} = context
    const res = await fetch(`http://localhost:3004/products/${params.productsId}`)
    const d = await res.json()
    return{
        props:{
            productDetails:d
        }
    }
}