import React, { useState, FormEvent, ChangeEvent } from "react";
import styles from "./ContactModule.module.css";
import Contact from "@/assets/Contact.png";
import { Button, Title } from "@/shared/ui";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

const ContactModule: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введите имя";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }

    if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Некорректный телефон";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Введите сообщение";
    }

    if (!formData.consent) {
      newErrors.consent = "Необходимо согласие";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch(
        "https://api.test.cyberia.studio/api/v1/feedbacks",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных");
      }

      alert("Сообщение отправлено!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
      });
      setErrors({});
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <img className={styles.contact} src={Contact} alt="Mail Box" />
        <Title>
          Расскажите
          <br /> о вашем проекте:
        </Title>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor={styles.name} className={styles.inputLabel}>
            Ваше имя*
          </label>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя*"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
            id={styles.name}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={styles.email} className={styles.inputLabel}>
            Email*
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            id={styles.email}
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor={styles.tel} className={styles.inputLabel}>
            Телефон*
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Телефон*"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            id={styles.tel}
            required
          />

          {errors.phone && <p className={styles.error}>{errors.phone}</p>}
        </div>
        <div className={styles.messageContainer}>
          <label htmlFor={styles.message} className={styles.inputLabel}>
            Сообщение*
          </label>
          <textarea
            name="message"
            placeholder="Сообщение*"
            value={formData.message}
            onChange={handleChange}
            id={styles.message}
            required
          />

          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            id={styles.checkbox}
          />
          Согласие на обработку персональных данных
        </label>
        {errors.consent && <p className={styles.error}>{errors.consent}</p>}

        <Button id={styles.send} variant="primary" type="submit" round>
          <span className={styles.mobileText}>Отправить</span>
          <span className={styles.desctopText}>Обсудить проект</span>
        </Button>
        <p className={styles.warning}>
          Нажимая “Отправить”, Вы даете согласие на обработку персональных
          данных
        </p>
      </form>
    </section>
  );
};

export default ContactModule;
