import React, { useState } from "react";
import SkipCard from "./components/SkipCard"; 
import "./App.css";
import useSkips from "./hooks/useSkips"; 

const App = () => {
  const { skips, loading, error } = useSkips();
  const [selectedId, setSelectedId] = useState(null);


  return (
    <main className="container">
      <h1>Choose Your Skip Size</h1>
      <p className="subtitle">Select the skip size that best suits your needs</p>
      {loading && <p style={{ textAlign: "center" }}>Loading skips...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>Failed to load skips.</p>}
      <div className="grid">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selected={selectedId === skip.id}
            onSelect={() => setSelectedId(skip.id)}
          />
        ))}
      </div>
      <div className="footer">
        <button disabled={!selectedId} className="continue-btn">
          Continue
        </button>
      </div>
    </main>
  );
};

export default App;
