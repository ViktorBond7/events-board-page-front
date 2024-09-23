import { useEffect, useState } from "react";
import BoardList from "../../components/BoardList/BoardList";
import { fetchBoard } from "../../components/api";
import Loader from "../../components/Loader/Loader";

const BoarderListPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const borders = await fetchBoard();
        setEvents(borders);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Events</h1>
      <BoardList events={events} />
      {loading && <Loader />}
    </div>
  );
};

export default BoarderListPage;
