import ClientTemplate from "desktop/clientTemplate";
import MessageGroupContainer from "desktop/containers/MessageGroupContainer";
import { useParams } from "react-router";
import NeedToLogin from "Verification/NeedToLogin";

export default function MessageListPage() {
    const params = useParams()
    return (
        NeedToLogin(<ClientTemplate>
            <MessageGroupContainer group_id={params.id} />
        </ClientTemplate>)
    )
}

