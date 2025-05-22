import { useState, useEffect } from "react";

export default function Home() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Smart Food Ordering</h1>
      <p>🇺🇸 English - 🇩🇪 Deutsch - 🇸🇦 العربية</p>

      {loading && <p>Loading location...</p>}
      {!loading && !location && <p>Unable to get location.</p>}
      {location && (
        <div>
          <p>Your location:</p>
          <ul>
            <li>Latitude: {location.latitude}</li>
            <li>Longitude: {location.longitude}</li>
          </ul>
          <p>Start ordering food smartly!</p>
        </div>
      )}
    </div>
  );
}
