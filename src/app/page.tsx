import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Ceo from "./components/Ceo";

export default function Home() {
  return (
    <>
      <div>
        <Hero />

        <NewProducts />
        <Ceo />
      </div>
    </>
  );
}
