import axios from "axios";
import toast from "react-hot-toast";

export const fetchBoard = async () => {
  const getBoard = await axios("https://events-board-page.onrender.com/bords");
  return getBoard.data.data;
};

export const fetchRegisteredUser = async (setUsers, eventId) => {
  try {
    const getRegisteredUser = await axios.get(
      `https://events-board-page.onrender.com/events/${eventId}/users`
    );

    setUsers(getRegisteredUser.data.data);
  } catch (error) {
    console.error("Error fetching users for event:", error);
  }
};

export const registration = async (formData) => {
  try {
    const response = await axios.post(
      "https://events-board-page.onrender.com/register",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      toast.success("Registration successful!");
    } else {
      console.error("Registration error:", response.statusText);
    }
  } catch (error) {
    console.error("Network or server error:", error);
  }
};
