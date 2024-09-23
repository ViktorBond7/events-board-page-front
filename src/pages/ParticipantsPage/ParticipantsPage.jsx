import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ParticipantsList from "../../components/ParticipantsList/ParticipantsList";

const ParticipantsPage = () => {
  const [users, setUsers] = useState([]);
  const { eventId } = useParams();
  useEffect(() => {
    fetch(`https://events-board-page.onrender.com/events/${eventId}/users`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setUsers(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching users for event:", error);
      });
  }, [eventId]);

  return (
    <div>
      <Link to="/">
        <button>Go back</button>
      </Link>
      <h2>Awesome Event Participants</h2>
      {users.length > 0 ? (
        <ParticipantsList users={users} />
      ) : (
        <p>No users have registered for this event yet.</p>
      )}
    </div>
  );
};

export default ParticipantsPage;
