import { useRouter } from "next/router"

function Review(){
    
    const router = useRouter()
    const { productId, reviewId } = router.query
    console.log(router.query)
    return  <>
                <h1> ProductId {productId} ReviewId {reviewId}</h1>
            </>
}

export default Review