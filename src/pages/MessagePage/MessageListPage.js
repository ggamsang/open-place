/*
 container component 는 컴포넌트 구조 설계가 끝난 뒤에 생성할 것.
*/
import ClientTemplate from "clientTemplate";
import MessageGroupContainer from "containers/MessageGroupContainer";

export default function MessageListPage() {
    return (<ClientTemplate>
        <MessageGroupContainer />
    </ClientTemplate>)
}