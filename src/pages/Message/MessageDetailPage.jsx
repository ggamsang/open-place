import { useParams } from "react-router-dom"

export function MessageDetailPage() {
    const params = useParams();
    return (<>
        message-detail-page<br />
        {params.id}
    </>)
}