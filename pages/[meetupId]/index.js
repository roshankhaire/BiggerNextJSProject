import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail"
import { MongoClient ,ObjectId} from "mongodb"
function MeetupDetails(props){
  return(
    <MeetupDetail image={props.meetupData.image}
       title={props.meetupData.title} address={props.meetupData.title} description={props.meetupData.description}/>
  )
}
export async  function getStaticPaths(){
  const client=MongoClient.connect("mongodb+srv://roshankhaire1992 :lordbuddha@cluster0.4tt52ji.mongodb.net/meetups?retryWrites=true&w=majority")
  const db=client.db();
  const meetupsCollection=db.collection("meetups");
  const meetups=meetupsCollection.find({},{_id:1}).toArray();
   client.close()
  return {
    fallback:false,
    paths: meetups.map(meetup=>({params:{
      meetupId:meetup>_id.toString()
    }}))
 
  }
}
export async function getStaticProps(context){
      const meetupId=context.params.meetupId;
      // console.log(meetupId)
      const client=MongoClient.connect("mongodb+srv://roshankhaire1992 :lordbuddha@cluster0.4tt52ji.mongodb.net/meetups?retryWrites=true&w=majority")
      const db=client.db();
      const meetupsCollection=db.collection("meetups");
     const selectMeetups= await meetupsCollection.findOne({_id:ObjectId(meetupId)})
       client.close()
    return{
      props:{
        meetupData:{
          id:selectMeetups._id.toString(),
          title:selectMeetups.title,
           address:selectMeetups.address,
           description:selectMeetups.description,
        }
      }
    }
}
export default MeetupDetails