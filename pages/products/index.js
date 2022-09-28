import Link from "next/link"

const ProductList = ({ products }) => {
    return  <>
                {
                    products.map((product)=>{
                        
                        return  <Link href={`/products/${product.id}`} passHref key={product.id}>
                                    <div>
                                        <span>{product.id}</span>&nbsp;&nbsp;
                                        <span>{String(product.completed)}</span>&nbsp;&nbsp;
                                        <span>{product.price}</span>&nbsp;&nbsp;
                                        <span>{product.title}</span>&nbsp;&nbsp;
                                    </div>
                                </Link>
                    })

                }
            </>
}
export default ProductList

export async function getStaticProps (){
    const response = await fetch('http://localhost:3004/products')
    const data = await response.json();
    return{
        props:{
            products:data
        },
        revalidate:30,
    }
}