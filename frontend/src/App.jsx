import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://backend:5000/api/message")
      .then((res) => res.json())
      .then((result) => setData(result.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Fullstack App</h1>
      <p>Frontend: React + Vite</p>
      <p>Backend: Node.js + Express</p>
      <h2>Message from Backend:</h2>
      <p style={{ color: "green", fontWeight: "bold" }}>{data}</p>
    </div>
  );
}

export default App;