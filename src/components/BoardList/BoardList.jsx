import { Link } from "react-router-dom";
import css from "./BoardList.module.css";
const BoardList = ({ events }) => {
  return (
    <>
      <ul className={css.list}>
        {events.map((event) => (
          <li key={event._id} className={css.listList}>
            <div className={css.container}>
              <div>
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <p>Date: {new Date(event.event_date).toLocaleDateString()}</p>
                <p>Organizer: {event.organizer}</p>
              </div>
              <div className={css.containerLink}>
                <Link to={`/register/${event._id}`}>Register</Link>
                <Link to={`/events/${event._id}/users`}>View</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default BoardList;
