import { useState } from "react";

const translations = {
  en: {
    title: "Smart Food Ordering",
    description: "Choose your favorite dishes:",
    order: "Order Now",
    language: "Language",
  },
  ar: {
    title: "طلب الطعام الذكي",
    description: "اختر أطباقك المفضلة:",
    order: "اطلب الآن",
    language: "اللغة",
  },
  de: {
    title: "Intelligente Essensbestellung",
    description: "Wählen Sie Ihre Lieblingsgerichte:",
    order: "Jetzt bestellen",
    language: "Sprache",
  },
};

const foodMenu = [
  { id: 1, name: { en: "Pizza", ar: "بيتزا", de: "Pizza" }, price: 8.5 },
  { id: 2, name: { en: "Burger", ar: "برجر", de: "Burger" }, price: 6 },
  { id: 3, name: { en: "Salad", ar: "سلطة", de: "Salat" }, price: 5 },
];

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [order, setOrder] = useState([]);

  const t = translations[language];

  function toggleLanguage(e) {
    setLanguage(e.target.value);
  }

  function addToOrder(item) {
    setOrder([...order, item]);
  }

  return (
    <div style={{ padding: 20, direction: language === "ar" ? "rtl" : "ltr" }}>
      <h1>{t.title}</h1>

      <label>
        {t.language}:{" "}
        <select value={language} onChange={toggleLanguage}>
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="de">Deutsch</option>
        </select>
      </label>

      <p>{t.description}</p>

      <ul>
        {foodMenu.map((item) => (
          <li key={item.id}>
            {item.name[language]} - ${item.price.toFixed(2)}{" "}
            <button onClick={() => addToOrder(item)}>{t.order}</button>
          </li>
        ))}
      </ul>

      <h2>Order Summary:</h2>
      <ul>
        {order.map((item, idx) => (
          <li key={idx}>{item.name[language]}</li>
        ))}
      </ul>
    </div>
  );
}
