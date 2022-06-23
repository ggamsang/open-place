import ClientTemplate from "clientTemplate";
import { useParams } from "react-router";
import MessageDetailContainer from "containers/MessageDetailContainer";

export const MessageDetailPage = (() => {
    const params = useParams();
    return (<ClientTemplate>
        <MessageDetailContainer group_id={params.id} />
    </ClientTemplate>);
})