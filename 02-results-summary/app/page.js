import CategoryScore from "./components/CategoryScore"
import Footer from "./components/Footer"

export default function Home() {

  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-screen bg-neutral-white rounded-3xl shadow-md sm:flex sm:max-w-2xl m-auto">
          <section className="bg-gradient-to-b from-gradient-light-slate-blue to-gradient-light-royal-blue rounded-b-3xl sm:rounded-3xl flex flex-col items-center place-content-evenly text-center">
            <h1 className="text-neutral-light-lavender text-center p-2 text-lg font-semibold">Your Result</h1>
            <div className="bg-gradient-to-b from-gradient-violet-blue/70 to-gradient-persian-blue/10 w-32 h-32 rounded-full flex flex-col place-content-center animate-fade-down animate-once animate-duration-[1500ms] animate-delay-[1000ms]">
              <p className="font-extrabold text-neutral-white text-5xl"><strong>76</strong></p>
              <p className="text-neutral-light-lavender">of 100</p>
            </div>
            <h3 className="text-neutral-white p-2 text-2xl font-semibold">Great</h3>
            <p className="text-neutral-light-lavender text-sm px-16 pb-6">You scored higher than 65% of the people who have taken these tests.</p>
          </section>
          <div className='bg-neutral-white pb-4 sm:px-8 sm:rounded-3xl sm:pt-2 content-evenly'>
            <div className="my-4 sm:my-0 sm:mt-3">
              <h2 className="w-72 mx-auto font-medium text-lg">Summary</h2>
            </div>
            <section className="flex flex-col content-evenly items-center justify-items-center">
              <CategoryScore />
              <button className="bg-neutral-dark-gray-blue text-neutral-white rounded-full w-72 px-20 py-2 mx-auto sm:mb-3 hover:bg-neutral-dark-gray-blue/95 hover:underline transition-all">
                Continue
              </button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
