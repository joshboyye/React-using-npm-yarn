import MeetupList from "../components/meetups/MeetupList";
import { useEffect } from "react";
import { useState } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
/*
  useEffect(() => {
    fetch(
      "https://react-getting-started-4a994-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
*/
  const DUMMY_DATA = [
    {
      id: "m1",
      title: "This is a first meetup",
      image:
        "https://cdn.contexttravel.com/image/upload/w_1500,q_60/v1571947279/blog/36%20Hours%20in%20NYC/NewYorkStreets.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
      id: "m2",
      title: "This is a second meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
  ];

  return (
    <section>
      <h1>all meet up</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
