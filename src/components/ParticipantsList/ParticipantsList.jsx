import css from "./ParticipantsList.module.css";
const ParticipantsList = ({ users }) => {
  return (
    <ul className={css.list}>
      {users.map((user) => (
        <li key={user._id} className={css.listList}>
          <p>{user.fullName}</p>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
};
export default ParticipantsList;
