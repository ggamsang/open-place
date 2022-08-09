import { useParams } from "react-router-dom"

export function NoticeDetailPage() {
    const params = useParams();
    return (<>
        notice-detail-page<br />
        {params.id}
    </>)
}
