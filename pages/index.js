import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"
const DUMMY_MEETUPS=[
    {
        id:"m1",
        title:"The first Meetups",
        image:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address:"some address 5,some city",
        discription:"This is a first metup!"
    },
    {
        id:"m2",
        title:"The second Meetups",
        image:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address:"some address 10,some city",
        discription:"This is a second metup!"
    }
]
function HomePage(props){

    return(
       
       <MeetupList meetups={props.meetups}/>
      
             
    )
}
export async function getStaticProps(){
    const client=MongoClient.connect("mongodb+srv://roshankhaire1992 :lordbuddha@cluster0.4tt52ji.mongodb.net/meetups?retryWrites=true&w=majority")
    const db=client.db();
    const meetupsCollection=db.collection("meetups");
     const meetups= await meetupsCollection.find().toArray()
     client.close()
    return{
        props:{
            meetups:meetups.map(meetup=>({
                title:meetup.title,
                address:meetup.address,
                image:meetup.image,
               id:meetup._id.toString()


            }))
        },
        revalidate:10
    }
}
export default HomePage;