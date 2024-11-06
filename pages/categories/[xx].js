import { useRouter } from "next/router"
import carsData from "@/data/carsData"
import CarList from "@/components/templates/CarList"

const CardCategori = () => {
    const router = useRouter()
    const {xx} = router.query;
    console.log(router)
    const categori = carsData.filter((car) => car.category === xx)
   
  return (
    <div><CarList data={categori}/></div>
  )
}

export default CardCategori