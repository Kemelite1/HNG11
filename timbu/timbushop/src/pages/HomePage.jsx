import AllProducts from "../components/AllProducts"
import Hero from "../components/Hero"
import RecommendedProducts from "../components/RecommendedProducts"
import EmptyCartPage from "./EmptyCartPage"

const HomePage = () => {
  return (
    <>
    <Hero />
    <AllProducts />
    <EmptyCartPage />
    <RecommendedProducts />
    </>
  )
}

export default HomePage