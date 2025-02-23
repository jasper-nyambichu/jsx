import { useEffect, useState, useRef } from "react";

function Nateku() {
  const [count, setCount] = useState(0);
  const prevCount = useRef;

  useEffect(() => {
    prevCount.current = count;
  },[count])

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h4 className="text-center shadow p-2 bg-primary text-white rounded">
          Welcome To Our Counting Game
        </h4>
        <div className="row g-4 mb-4">
          <div className="col text-center">
            <p className="lead fw-bold">Current count: {count}</p>
          </div>
          <div className="col-md text-center">
            <p className="lead fw-bold">Previous count: {prevCount.current}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={handleClick}
            className="btn btn-lg btn-success fw-bold px-4 py-2"
          >
            Increment: {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nateku;
