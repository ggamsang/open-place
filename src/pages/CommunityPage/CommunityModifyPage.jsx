import { useParams } from "react-router-dom"

export function CommunityModifyPage() {
    const params = useParams();
    return (<>
        community-modify-page<br />
        {params.id}
    </>)
}
