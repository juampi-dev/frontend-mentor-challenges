'use client'

import { useState } from "react";

interface SubmitButtonProps {
  rating: number | null;
  handleSubmit: () => void;
}

export default function SubmitButton({ rating, handleSubmit }: SubmitButtonProps): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [shakeKey, setShakeKey] = useState(0); // Variable de estado para cambiar la clave "key" del elemento <p>

  const handleClick = () => {
    if (rating !== null) {
      setIsClicked(true);
      setIsValid(true); // reset isValid state to true
      setShakeKey(0); // reset shakeKey state to 0
      handleSubmit();
    } else {
      setIsValid(false);
      setShakeKey((prev) => prev + 1); // Incrementa la variable shakeKey en 1 cada vez que se hace clic en el botón Submit sin un puntaje válido
    }
  };

  return (
    <div className="grid place-content-center my-6">
      <button
        className={`rounded-full bg-orange py-2 px-20 sm:px-24 text-white font-medium tracking-widest text-sm hover:text-orange hover:bg-white transition duration-150 ${
          isClicked ? "animate-jump animate-once animate-duration-500 animate-delay-0" : ""
        }`}
        onClick={handleClick}
      >
        SUBMIT
      </button>
      {!isValid && (
        <p
          key={shakeKey} // Usa la variable shakeKey como clave "key"
          className="absolute w-fit px-10 m-6 text-center top-56 sm:px-20 sm:mx-8 sm:my-8 animate-shake animate-twice animate-duration-[650ms] animate-delay-150 text-white text-xs"
        >
          Please select a valid option
        </p>
      )}
    </div>
  );
}