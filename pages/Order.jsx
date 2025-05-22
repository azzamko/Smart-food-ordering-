import React, { useState } from "react";
// استيراد ملف الترجمة JSON
import translations from "../locales/en/common.json";

export default function Order() {
  const [dish, setDish] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (dish) {
      setOrderPlaced(true);
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial" }}>
      <h1>{translations.place_order}</h1>

      {orderPlaced ? (
        <p>{translations.order_received}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            {translations.select_dish}:
            <select
              value={dish}
              onChange={(e) => setDish(e.target.value)}
              required
            >
              <option value="">{translations.choose}</option>
              <option value="pizza">{translations.pizza}</option>
              <option value="burger">{translations.burger}</option>
              <option value="salad">{translations.salad}</option>
            </select>
          </label>

          <br />
          <label>
            {translations.quantity}:
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>

          <br />
          <button type="submit">{translations.submit_order}</button>
        </form>
      )}
    </div>
  );
}
