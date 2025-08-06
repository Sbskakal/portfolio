import { useEffect, useRef, useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import SnowballsContainer from "./fx.jsx";
import Changing from "./changing.jsx";
import TechCard from "./card.jsx";
import Re from "./creact.jsx";
import Ru from "./rust.jsx";
import Cpp from "./cpp.jsx";
import Dj from "./dj.jsx";
function App() {
  const [count, setCount] = useState(40);
  const prev = useRef(window.scrollY);

  useEffect(() => {
    function handle(a) {
      let dif = a - prev.current;
      setCount((c) => c + dif / 2);
      prev.current = window.scrollY;
    }

    window.addEventListener("scroll", () => handle(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => handle(window.scrollY));
    };
  }, []);
  return (
    <>
      <div className="all">
        <SnowballsContainer />
        <div className="ktaba">
          <Changing />
        </div>

        <div className="bg"></div>
        <div
          className="me"
          style={{
            top: `calc(90vh - 30vw - 2vw + ${-count / 2}px)`,
            right: "1vw",
            width: "30vw",
            height: "45vw",
            position: "absolute",
          }}
        ></div>
        <div className="middle" style={{ top: `${-80 - count / 2}px` }}></div>
        <div className="front" style={{ top: `${130 - count * 1.2}px` }}></div>
        <div className="lront" style={{ top: `${70 - count * 1.2}px` }}></div>
        <div className="after" style={{ top: `${877 - count}px` }}></div>
        <div className="mnb3d">
          <div className="crystal"></div>
          <div className="cards">
            <h1 className="present">
              {" "}
              i can use these languages to give you the
              <br /> best experience in my projects
            </h1>
            <TechCard />
            <Re />
            <Ru />
            <Cpp />
            <Dj />
          </div>
          <div className="shadow"></div>
          <div
            className="crystals"
            style={{ top: `${570 - count / 2}px` }}
          ></div>
        </div>
        <div className="rbt"></div>
        <div className="l7otabg">
          <div className="hjr">
            <img
              src="https://img.icons8.com/?size=100&id=53889&format=png&color=000000"
              style={{
                right: "142px",
                top: "820px",
                position: "absolute",
                cursor: "pointer",
              }}
            />
            <a href="https://www.tiktok.com/@zeleas5?_t=ZS-8ye8u9GM3Fo&_r=1">
              <img
                src="https://img.icons8.com/?size=100&id=HjzuIwamFPXs&format=png&color=000000"
                style={{
                  right: "32px",
                  top: "620px",
                  position: "absolute",
                  cursor: "pointer",
                }}
              />
            </a>

            <img
              src="https://img.icons8.com/?size=100&id=JeO1Kv9jsmLr&format=png&color=000000"
              style={{
                right: "82px",
                top: "320px",
                position: "absolute",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="whale"></div>
        </div>
      </div>
    </>
  );
}

export default App;
