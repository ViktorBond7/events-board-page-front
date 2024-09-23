import { useState } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { Link, useParams } from "react-router-dom";

const RegisterPage = () => {
  const { eventId } = useParams();
  // Управляем состоянием полей формы в RegisterPage
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    eventId: eventId, // Добавляем eventId в formData, если нужно
  });

  console.log("Form data in RegisterPage:", formData); // Для отладки

  return (
    <div>
      <Link to="/">Home</Link> {/* Ссылка на главную страницу */}
      {/* Передаём состояние формы и функцию для его обновления в RegistrationForm */}
      <RegistrationForm formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default RegisterPage;
