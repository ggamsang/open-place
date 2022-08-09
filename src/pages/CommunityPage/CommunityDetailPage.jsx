import { useParams } from "react-router-dom"

export function CommunityDetailPage() {
    const params = useParams();
    return (<>
        community-detail-page<br />
        {params.id}
    </>)
}
