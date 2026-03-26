import React from "react";

const GUMROAD_LINK = "https://your-link-here"; // replace with your real link

function App() {
  const handleClick = () => {
    window.location.href = GUMROAD_LINK;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ReadAloud AI 🎧</h1>
      <p style={styles.text}>
        Turn any text into natural-sounding speech instantly.
      </p>

      <button style={styles.button} onClick={handleClick}>
        Get Access
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "40px",
  },
  text: {
    fontSize: "18px",
    margin: "20px 0",
  },
  button: {
    padding: "15px 30px",
    fontSize: "18px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default App;

