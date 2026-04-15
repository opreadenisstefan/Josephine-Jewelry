import { useState } from "react";

export default function App() {
  const [metal, setMetal] = useState("aur");
  const [stone, setStone] = useState("diamant");

  const boxStyle = {
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 10,
    marginBottom: 20,
  };

  const buttonStyle = (active) => ({
    marginRight: 10,
    padding: "10px 20px",
    borderRadius: 8,
    border: active ? "2px solid black" : "1px solid #ccc",
    background: active ? "#f5f5f5" : "white",
    cursor: "pointer",
  });

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 40 }}>
      <h1 style={{ textAlign: "center" }}>Creează bijuteria ta 💎</h1>

      <div style={boxStyle}>
        <h3>1. Alege metalul</h3>
        <button
          style={buttonStyle(metal === "aur")}
          onClick={() => setMetal("aur")}
        >
          Aur
        </button>
        <button
          style={buttonStyle(metal === "argint")}
          onClick={() => setMetal("argint")}
        >
          Argint
        </button>
      </div>

      <div style={boxStyle}>
        <h3>2. Alege piatra</h3>
        <button
          style={buttonStyle(stone === "diamant")}
          onClick={() => setStone("diamant")}
        >
          Diamant
        </button>
        <button
          style={buttonStyle(stone === "safir")}
          onClick={() => setStone("safir")}
        >
          Safir
        </button>
      </div>

      <div style={{ ...boxStyle, background: "#fafafa" }}>
        <h2>Rezultatul tău</h2>
        <p><b>Metal:</b> {metal}</p>
        <p><b>Piatra:</b> {stone}</p>
      </div>
    </div>
  );
}