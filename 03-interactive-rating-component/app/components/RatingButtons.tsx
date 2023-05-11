'use client'

import { useState } from "react";

type RatingButtonsProps = {
  setRating: (value: number | null) => void;
};

export default function RatingButtons(props: RatingButtonsProps): JSX.Element {
  const stars: number[] = [1, 2, 3, 4, 5];
  const [clickedStar, setClickedStar] = useState<number | null>(null);

  const handleButtonClick = (star: number) => {
    if (clickedStar === star) {
      setClickedStar(null);
      props.setRating(null);
    } else {
      setClickedStar(star);
      props.setRating(star);
    }
  };

  return (
    <div className="flex justify-between px-7 py-2">
      {stars.map((star: number) => (
        <button
          key={star}
          className={`rounded-full w-8 p-2 sm:w-10 sm:h-10 text-white text-xs sm:text-sm transition duration-150 ${
            clickedStar === star
              ? "animate-jump animate-once animate-duration-500 animate-delay-0 bg-orange hover:bg-orangeDark"
              : "bg-grey-medium/20 hover:bg-grey-light"
          }`}
          onClick={() => handleButtonClick(star)}
        >
          {star}
        </button>
      ))}
    </div>
  );
}
