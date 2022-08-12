import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const navigate = useNavigate();
  function addMeetupHandler(meetupData) {
    fetch("https://react-meeup-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Add New MeetUp</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
