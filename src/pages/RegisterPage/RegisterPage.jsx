import { useState } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Link, useParams } from "react-router-dom";

const RegisterPage = () => {
  const { eventId } = useParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    eventId: eventId,
  });

  console.log("Form data in RegisterPage:", formData);

  return (
    <div>
      <Link to="/">Home</Link>

      <RegistrationForm formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default RegisterPage;
