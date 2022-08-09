import { useParams } from "react-router-dom"

export function ExpDetailPage() {
    const params = useParams();
    return (<>
        {params.id}
    </>)
}