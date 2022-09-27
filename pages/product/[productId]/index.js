import { useRouter } from "next/router"

function ProductList(){
    const router = useRouter()
    const productId = router.query.productId
    return <>
                <h1>Product Details {productId}</h1>
            </>
}
export default ProductList