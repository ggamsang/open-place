import ClientTemplate from "desktop/clientTemplate";
import MessageGroupContainer from "desktop/containers/MessageGroupContainer";
import NeedToLogin from "Verification/NeedToLogin";

export default function MessageListPage() {
    return (
        NeedToLogin(<ClientTemplate>
            <MessageGroupContainer />
        </ClientTemplate>)
    )
}

