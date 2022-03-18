import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpsPage() {
  const navigate = useNavigate();
  const addMeetupHandler = function (data) {
    fetch("https://react-project-e24ee-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        navigate("/", { replace: true });
      })
  }
  return (
    <section>
      <h1>New Meetups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}
export default NewMeetUpsPage;