import React from "react";

const SnowballsContainer = () => {
  return (
    <div className="snow-container" style={{ zIndex: 12 }}>
      <style>{`
        .snow-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .snowball {
          position: absolute;
          background: radial-gradient(
            circle at 30% 30%,
            #ffffff,
            #f0f8ff,
            #ddeeff
          );
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3),
            inset 0 1px 3px rgba(255, 255, 255, 0.4);
          animation: fall linear infinite;
          opacity: 0.8;
        }

        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .snowball:nth-child(1) {
          left: 10%;
          width: 12px;
          height: 12px;
          animation-duration: 8s;
          animation-delay: 0s;
        }
        .snowball:nth-child(2) {
          left: 20%;
          width: 20px;
          height: 20px;
          animation-duration: 6s;
          animation-delay: 1s;
        }
        .snowball:nth-child(3) {
          left: 30%;
          width: 16px;
          height: 16px;
          animation-duration: 9s;
          animation-delay: 2s;
        }
        .snowball:nth-child(4) {
          left: 40%;
          width: 24px;
          height: 24px;
          animation-duration: 7s;
          animation-delay: 0.5s;
        }
        .snowball:nth-child(5) {
          left: 50%;
          width: 14px;
          height: 14px;
          animation-duration: 10s;
          animation-delay: 1.5s;
        }
        .snowball:nth-child(6) {
          left: 60%;
          width: 28px;
          height: 28px;
          animation-duration: 5s;
          animation-delay: 3s;
        }
        .snowball:nth-child(7) {
          left: 70%;
          width: 18px;
          height: 18px;
          animation-duration: 8.5s;
          animation-delay: 0.8s;
        }
        .snowball:nth-child(8) {
          left: 80%;
          width: 22px;
          height: 22px;
          animation-duration: 6.5s;
          animation-delay: 2.5s;
        }
        .snowball:nth-child(9) {
          left: 90%;
          width: 15px;
          height: 15px;
          animation-duration: 9.5s;
          animation-delay: 1.2s;
        }
        .snowball:nth-child(10) {
          left: 15%;
          width: 26px;
          height: 26px;
          animation-duration: 7.5s;
          animation-delay: 3.5s;
        }
        .snowball:nth-child(11) {
          left: 25%;
          width: 13px;
          height: 13px;
          animation-duration: 8.8s;
          animation-delay: 0.3s;
        }
        .snowball:nth-child(12) {
          left: 35%;
          width: 21px;
          height: 21px;
          animation-duration: 6.8s;
          animation-delay: 1.8s;
        }
        .snowball:nth-child(13) {
          left: 45%;
          width: 17px;
          height: 17px;
          animation-duration: 9.2s;
          animation-delay: 2.8s;
        }
        .snowball:nth-child(14) {
          left: 55%;
          width: 25px;
          height: 25px;
          animation-duration: 5.5s;
          animation-delay: 0.7s;
        }
        .snowball:nth-child(15) {
          left: 65%;
          width: 19px;
          height: 19px;
          animation-duration: 8.2s;
          animation-delay: 1.7s;
        }
        .snowball:nth-child(16) {
          left: 75%;
          width: 23px;
          height: 23px;
          animation-duration: 7.2s;
          animation-delay: 2.2s;
        }
        .snowball:nth-child(17) {
          left: 85%;
          width: 11px;
          height: 11px;
          animation-duration: 10.5s;
          animation-delay: 3.2s;
        }
        .snowball:nth-child(18) {
          left: 5%;
          width: 27px;
          height: 27px;
          animation-duration: 6.2s;
          animation-delay: 0.9s;
        }
        .snowball:nth-child(19) {
          left: 95%;
          width: 16px;
          height: 16px;
          animation-duration: 8.7s;
          animation-delay: 1.4s;
        }
        .snowball:nth-child(20) {
          left: 12%;
          width: 20px;
          height: 20px;
          animation-duration: 7.8s;
          animation-delay: 2.9s;
        }
      `}</style>

      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
      <div className="snowball"></div>
    </div>
  );
};

export default SnowballsContainer;
