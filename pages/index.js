import MeetupList from "../components/meetups/MeetupList"

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
function HomePage(){
    return(
       
       <MeetupList meetups={DUMMY_MEETUPS}/>
      
             
    )
}
export default HomePage;