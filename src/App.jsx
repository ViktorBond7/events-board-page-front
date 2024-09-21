import { useEffect, useState } from "react";
import "./App.css";
import BoardList from "./components/BoardList/BoardList";

function App() {
  const [events, setEvents] = useState([]);
  console.log("ghghghghghgh", events);
  useEffect(() => {
    fetch("https://events-board-page.onrender.com/bords")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Events</h1>
      <BoardList events={events} />
    </div>
  );
}

export default App;

// https://events-board-page.onrender.com/bords

// "_id": "66eedfa67773c1cf3593c871",
// "title": "Music Festival",
// "description": "An outdoor music festival featuring popular bands and artists.",
// "event_date": "2024-07-20T16:00:00.000Z",
// "organizer": "Live Nation"
