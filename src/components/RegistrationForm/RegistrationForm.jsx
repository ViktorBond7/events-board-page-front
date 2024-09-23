import { Navigate } from "react-router-dom";

const RegistrationForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://events-board-page.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Успешная регистрация:", result);
        Navigate("/");
      } else {
        console.error("Ошибка регистрации:", response.statusText);
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>Where did you hear about this event?</label>
        <div>
          <input
            type="radio"
            name="referral"
            value="social_media"
            onChange={handleChange}
          />{" "}
          Social media
          <input
            type="radio"
            name="referral"
            value="friends"
            onChange={handleChange}
          />{" "}
          Friends
          <input
            type="radio"
            name="referral"
            value="found_myself"
            onChange={handleChange}
          />{" "}
          Found myself
        </div>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
