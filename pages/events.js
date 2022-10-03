import { useRouter } from "next/router"
import { useState } from "react"

const EventList = ({ eventData }) => {
    const [events,setEvents] = useState(eventData)
    const router = useRouter()

    const fetchSportsEvent = async () => {
        const response = await fetch(`http://localhost:4000/events?category=sports`)
        const myData = await response.json()
        setEvents(myData)
        router.push('/events?category=sports',undefined,{ shallow : true})
    }
    return(
        <>
            <button onClick={fetchSportsEvent}>sports Events</button>
            <h1>Events Data</h1>
            {
                events.map(cv=>{
                    return(
                        <div key={cv.id}>
                            <span>{cv.id}</span> &nbsp;&nbsp;
                            <span>{cv.title}</span> &nbsp;&nbsp;
                            <span>{cv.date}</span> &nbsp;&nbsp;
                            <span>{cv.category}</span> &nbsp;&nbsp;
                            <span>{cv.description}</span> &nbsp;&nbsp;
                        </div>
                    )
                })
            }
        </>
    )

}
export default EventList


export const  getServerSideProps = async (context) => {
    const { query } = context
    const { category } = query
    const queryString = category ? 'category=sports' : " "
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()
    return({
        props:{
            eventData:data,
        }
    })
}