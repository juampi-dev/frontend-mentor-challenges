'use client'

import { useState } from "react";
import Image from "next/image"
import iconStar from "public/img/icon-star.svg"
import RatingButtons from "./RatingButtons"
import SubmitButton from "./SubmitButton"
import ThankYou from "./ThankYou"

export default function Rating(){

  const [rating, setRating] = useState<number|null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    if (rating !== null) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <ThankYou rating={rating as number} />;
  }

  return(
    <section className="bg-dark-blue rounded-3xl mx-8 p-2 w-72 sm:w-96 flex flex-col animate-fade-down animate-delay-500">
      <figure className="px-7 py-4">
        <Image src={iconStar} width={10} height={10} alt="Icon Star" className="bg-grey-medium/20 rounded-full w-8 p-2 hover:bg-grey-light transition duration-150" />
      </figure>
      <div className="px-7 py-2">
        <h1 className="text-white font-semibold text-2xl mb-4 sm:text-3xl">How did we do?</h1>
        <h2 className="text-grey-light text-xs sm:text-sm">
          Please let us know how we did with your support request.
          All feedback is appreciated to help us improve our offering!
        </h2>
      </div>
      <RatingButtons setRating={setRating} />
      <SubmitButton rating={rating} handleSubmit={handleSubmit} />
    </section>
  )
}
