const RegistrationForm = ({ formData, setFormData }) => {
  // Функция для обработки изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    try {
      const response = await fetch(
        "https://events-board-page.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Отправляем данные формы на бэкенд
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Успешная регистрация:", result);
        // Тут можно обработать успешную регистрацию (например, показать сообщение)
      } else {
        console.error("Ошибка регистрации:", response.statusText);
        // Тут можно обработать ошибку (например, показать сообщение об ошибке)
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
