import { useRouter } from "next/router"
import carsData from "@/data/carsData"
import CarList from "@/components/templates/CarList"

const CardCategori = () => {
    const router = useRouter()
    const {cardCate} = router.query;
    const categori = carsData.filter((car) => car.category === cardCate)
   
  return (
    <div><CarList data={categori}/></div>
  )
}

export default CardCategori