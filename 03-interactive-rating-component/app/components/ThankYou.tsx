import Image from "next/image";

const thanks = {
  message : `We appreciate you taking the time to give a rating.
  If you ever need more support, don't hesitate to get in touch!`
}

export default function ThankYou({ rating }: { rating: number }): JSX.Element {
  return (
    <section className="bg-dark-blue rounded-3xl mx-8 p-2 flex flex-col items-center sm:w-96 animate-fade-up animate-delay-500">
      <figure>
        <Image src={'/img/illustration-thank-you.svg'} width={150} height={150} alt="Thank you icon" className="pt-8 sm:pb-2" />
      </figure>
      <div className="px-7 py-2 text-center">
        <p className="mx-auto bg-grey-medium/20 w-36 py-2 my-4 text-xs sm:text-sm sm:w-44 rounded-full text-orange">You selected {rating} out of 5</p>
        <h1 className="text-white font-semibold text-2xl sm:text-3xl py-2">
          Thank you!
        </h1>
        <h2 className="text-grey-light text-sm px-2 pt-2 pb-4 sm:text-base">
          {thanks.message}
        </h2>
      </div>
    </section>
  );
}
