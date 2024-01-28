
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
function NewMeetupPage(){
    function addMeetuphandler(enteredMeetupdata){
        console.log(enteredMeetupdata)

    }
     return(
        <NewMeetupForm onAddMeetup={addMeetuphandler}/>
     )
}
export default NewMeetupPage;