import { useRouter } from "next/router"

export default function Params() {
    const router = useRouter()

    const {params = []} = router.query
  return (
    <div>Doc Home Page <br /> {params}</div>
  )
}
