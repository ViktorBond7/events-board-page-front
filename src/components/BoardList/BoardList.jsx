import css from "./BoardList.module.css";
const BoardList = ({ events }) => {
  return (
    <>
      <ul className={css.list}>
        {events.map((event) => (
          <li key={event._id} className={css.listList}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Date: {new Date(event.event_date).toLocaleDateString()}</p>
            <p>Organizer: {event.organizer}</p>
            <div className={css.containerLink}>
              <p>Register</p>
              <p>View</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default BoardList;
