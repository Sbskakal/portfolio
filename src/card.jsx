import "./card.css";
export default function TechCard() {
  return (
    <div className="card">
      <div className="logo-container">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML"
          className="tech-logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS"
          className="tech-logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="tech-logo"
        />
      </div>
    </div>
  );
}
