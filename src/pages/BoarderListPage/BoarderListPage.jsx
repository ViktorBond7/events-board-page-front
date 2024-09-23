import { useEffect, useState } from "react";
import BoardList from "../../components/BoardList/BoardList";
import { fetchBoard } from "../../components/api";

const BoarderListPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchBoard(setEvents);
  }, []);

  return (
    <div className="App">
      <h1>Events</h1>
      <BoardList events={events} />
    </div>
  );
};

export default BoarderListPage;
