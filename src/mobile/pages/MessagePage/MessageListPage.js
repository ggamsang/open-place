import ClientTemplate from "mobile/clientTemplate";
import MessageGroupContainer from "mobile/containers/MessageGroupContainer";
import NeedToLogin from "Verification/NeedToLogin";

export default function MessageListPage() {
    return (
        NeedToLogin(<ClientTemplate>
            <MessageGroupContainer />
        </ClientTemplate>)
    )
}

