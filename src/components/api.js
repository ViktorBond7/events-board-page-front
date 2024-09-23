import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export const fetchBoard = async (setEvents) => {
  try {
    const getBoard = await axios(
      "https://events-board-page.onrender.com/bords"
    );

    setEvents(getBoard.data.data);
  } catch (error) {
    console.error("Error fetching events:", error);
  }
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
