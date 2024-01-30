import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail"
function MeetupDetails(){
  return(
    <MeetupDetail image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
       title="first Meetup" address="Some in 5,Newyork" description="Meetup Description"/>
  )
}
export async  function getStaticPaths(){
  return {
    fallback:false,
    paths:[{
      params:{
        meetupId:"m1"
      }
    },
    {
      params:{
        meetupId:"m2"
      }
    },  {
      params:{
        meetupId:"m3"
      }
    }
  ]
  }
}
export async function getStaticProps(context){
      const meetupId=context.params.meetupId;
      console.log(meetupId)
    return{
      props:{
        meetupData:{
             image:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
             id:meetupId,
             title:"first Meetup",
             address:"Some in 5,Newyork",
             description:"Meetup Description"

        }
      }
    }
}
export default MeetupDetails