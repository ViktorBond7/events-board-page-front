import { registration } from "../api";
import css from "./RegistrationForm.module.css";
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
    registration(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.contRoot}>
        <label className={css.contName}>
          Full Name
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
        <label className={css.contEmail}>
          Email
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
        <label className={css.contDate}>
          Date of Birth
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
      <button className={css.button} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
