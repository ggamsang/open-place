import ClientTemplate from "clientTemplate";
import MessageGroupContainer from "containers/MessageGroupContainer";
import NeedToLogin from "Verification/NeedToLogin";

export default function MessageListPage() {
    return (
        NeedToLogin(<ClientTemplate>
            <MessageGroupContainer />
        </ClientTemplate>)
    )
}

