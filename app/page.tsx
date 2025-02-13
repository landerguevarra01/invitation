"use client";

import { useState, useRef, useEffect } from "react";

export default function App() {
  const [question, setQuestion] = useState("hey");
  const [gifSrc, setGifSrc] = useState(
    "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif"
  );

  const noBtnRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the "No" button starts inside the container
    if (noBtnRef.current && containerRef.current) {
      noBtnRef.current.style.position = "absolute";
      // noBtnRef.current.style.left = "55%";
      // noBtnRef.current.style.top = "78.5%";
      // noBtnRef.current.style.transform = "translate(-50%, -50%)";
    }
  }, []);

  const handleYesClick = () => {
    setQuestion("I ");
    setGifSrc("https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif");
  };

  const moveNoButton = () => {
    if (noBtnRef.current && containerRef.current) {
      const btnWidth = noBtnRef.current.offsetWidth;
      const btnHeight = noBtnRef.current.offsetHeight;

      // Container size
      const maxX = 760 - btnWidth;
      const maxY = 640 - btnHeight;

      // Generate random positions within limits
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      noBtnRef.current.style.left = `${randomX}px`;
      noBtnRef.current.style.top = `${randomY}px`;
    }
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-gray-100">
      <div
        ref={containerRef}
        className="relative w-[1020px] h-[640px] flex flex-col justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <h2 className="text-center text-2xl text-red-500 mb-4">{question}</h2>
        <img
          src={gifSrc}
          alt="gif"
          className="w-full max-w-xs cursor-zoom-in transition-transform active:scale-110"
        />
        <div className="flex justify-center mt-10 space-x-40">
          <button
            onClick={handleYesClick}
            className="bg-red-500 text-white px-6 py-2 rounded-full shadow-md border-2 border-red-500 text-lg"
          >
            Yes
          </button>
          <button
            ref={noBtnRef}
            onMouseOver={moveNoButton}
            className="bg-white text-red-500 px-6 py-2 rounded-full shadow-md border-2 border-red-500 text-lg cursor-not-allowed"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
