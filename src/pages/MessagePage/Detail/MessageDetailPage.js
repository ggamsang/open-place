import ClientTemplate from "clientTemplate";
import { useParams } from "react-router";
import MessageDetailContainer from "containers/MessageDetailContainer";
import NeedToLogin from "Verification/NeedToLogin";

function MessageDetailPage() {
    const params = useParams();
    return (NeedToLogin(<ClientTemplate>
        <MessageDetailContainer group_id={params.id} />
    </ClientTemplate>));
}
export default MessageDetailPage;