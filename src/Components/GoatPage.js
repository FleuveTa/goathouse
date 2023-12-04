import { useParams } from "react-router-dom"

export default function GoatPage () {
    const {id} = useParams()
    const class_name = "goat" + id.toString()
    return (
        <div className={class_name}>
        </div>
    )
}