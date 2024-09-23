import { useState } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Link, useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const RegisterPage = () => {
  const { eventId } = useParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    eventId: eventId,
  });

  return (
    <div>
      <Link to="/">Home</Link>

      <RegistrationForm formData={formData} setFormData={setFormData} />
      <Toaster />
    </div>
  );
};

export default RegisterPage;
