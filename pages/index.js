import CarsPage from "../components/templates/CarsPage"
import carsData from "../data/carsData"
import Categories from "../components/module/Categories"
import SearchBar from "../components/module/SearchBar"
import AllButton from "@/components/module/AllButton"
export default function Home() {
const cars = carsData .slice(3,6)
  return (
    <div>
     <SearchBar />
      <Categories />
      <AllButton/>
      <CarsPage data={cars} />
    </div>
  )
}
