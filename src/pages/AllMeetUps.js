import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-project-e24ee-default-rtdb.firebaseio.com/meetups.json").then(res => res.json()).then(data => {
      const meetups = [];
      for (const key in data) {
        const myMeets = {
          id: key,
          ...data[key]
        };
        meetups.push(myMeets);
      }
      setIsLoading(false);
      setMeetups(meetups);
    });
  },
    []);

  if (isLoading) {
    return (
      <section>
        <p>Loading.....</p>
      </section>)
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups}></MeetupList>
      {/* <ul>
        {DUMMY_DATA.map(meetup => {
          return <li key={meetup.id}>{meetup.title}</li>
        })}
      </ul> */}
    </section>
  )
}
export default AllMeetUpsPage;