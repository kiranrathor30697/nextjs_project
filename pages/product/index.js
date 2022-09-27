import Link from "next/link"

function ProductList(){
    
    return <>
                <h1>Product 1</h1>
                <h1>Product 2</h1>
                <h1>Product 3</h1><br />
                <Link href="/product/1">
                    <a>Product Details</a>
                </Link>
            </>
}
export default ProductList