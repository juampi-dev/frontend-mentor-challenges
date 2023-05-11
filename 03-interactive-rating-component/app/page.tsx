import Rating from "./components/Rating";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Rating />
      </div>
      <Footer />
    </>
  );
}
