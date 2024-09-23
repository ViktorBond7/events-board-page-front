import { useEffect, useState } from "react";
import BoardList from "../../components/BoardList/BoardList";

const BoarderListPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://events-board-page.onrender.com/bords")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Events</h1>
      <BoardList events={events} />
    </div>
  );
};

export default BoarderListPage;
