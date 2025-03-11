import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Nyambichu() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handle = () => {
    setCount(count + 1);
    
    if (count >= 9 && count < 14) {
      setMessage(
        <span className="text-success fw-bold d-block fade-in">
          🎉 You have reached the climax of counting!
        </span>
      );
    } else {
      setMessage(""); // Clear message when count >= 9
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <div className="shadow-lg p-5 rounded bg-white text-center">
        <h1 className="mb-3 display-4 fw-bold text-primary">Count: {count}</h1>
        
        {/* Climax Message */}
        {count >= 5 && count < 15 ? <p className="fade-in">{message}</p> : null}

        {/* End of Game Message */}
        {count >= 15 ? (
          <p className="text-danger fw-bold fade-in">
            🚀 You have reached the End of this Game!
          </p>
        ) : null}

        <button
          className="btn btn-lg btn-outline-primary mt-3 px-4 py-2"
          onClick={() => {
            if (count >= 15) {
              setCount(0);
              setMessage("");
            } else {
              handle();
            }
          }}
        >
          {count >= 15 ? "Restart 🔄" : "Increment ➕"}
        </button>
      </div>
    </div>
  );
}

export default Nyambichu;
