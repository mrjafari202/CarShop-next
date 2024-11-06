import { useState } from "react"
import styles from "./SearchBar.module.css"
import { useRouter } from "next/router"

const SearchBar = () => {
    const router = useRouter()

    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const searchHandeler = () => {
        if (min && max) {
            router.push(`/filter/${min}/ ${max}`)
        } else { alert("لطفا مقدار حداقل و حداکثر را وارد کنید") }
    }
    return (
        <div className={styles.container}>
            <div>
                <input placeholder="inter min price" value={min} onChange={(e) => setMin(e.target.value)} />
                <input placeholder="inter max price" value={max} onChange={(e) => setMax(e.target.value)} />
            </div>
            <button onClick={searchHandeler}>Search</button>
        </div>
    )
}

export default SearchBar