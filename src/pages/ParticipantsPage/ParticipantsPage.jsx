import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ParticipantsList from "../../components/ParticipantsList/ParticipantsList";
import { fetchRegisteredUser } from "../../components/api";

const ParticipantsPage = () => {
  const [users, setUsers] = useState([]);
  const { eventId } = useParams();

  useEffect(() => {
    fetchRegisteredUser(setUsers, eventId);
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
