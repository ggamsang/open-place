import { useParams } from "react-router-dom"

export function ExpModifyPage() {
    const params = useParams();
    return (<>
        exp-modify-page<br />
        {params.id}
    </>)
}