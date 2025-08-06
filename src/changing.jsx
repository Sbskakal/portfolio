import { useState, useRef, useEffect, use } from "react";
import "./changing.css";
function Changing() {
  const [op, setop] = useState(0);

  const arr = useRef([
    <h2 className="changing-title" style={{ opacity: `{op}%` }}>
      full stack developper
    </h2>,
    <h2 className="changing-title " style={{ opacity: `{op}%` }}>
      professional designer
    </h2>,
    <h2 className="changing-title " style={{ opacity: `{op}%` }}>
      {" "}
      futur engineer
    </h2>,
  ]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arr.current.length);
    }, 4000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="brahim">i am brahim</h1>
        {arr.current[index]}
      </div>
    </>
  );
}
export default Changing;
