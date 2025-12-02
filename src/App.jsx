import { useState } from "react";

export default function App() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const found = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontFamily: "Georgia, serif" }}>Dictionary App</h1>

      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "6px",
          width: "200px",
          marginRight: "10px"
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          padding: "6px 12px",
          cursor: "pointer"
        }}
      >
        Search
      </button>

      <h3 style={{ marginTop: "20px", fontWeight: "bold" }}>Definition:</h3>
      <p>{result}</p>
    </div>
  );
}
