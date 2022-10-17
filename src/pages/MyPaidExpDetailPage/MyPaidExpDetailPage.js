import ClientTemplate from "clientTemplate";
import BuyExpDetailContainer from "containers/MyDetail/BuyExpDetailContainer";
import { useParams } from "react-router";
import NeedToLogin from "Verification/NeedToLogin";

function MyPaidExpDetailPage() {
  const params = useParams();
  return (
    <ClientTemplate>
      {
        // NeedToLogin(
        <BuyExpDetailContainer payment_id={params.id} />
        // )
      }
    </ClientTemplate>
  );
}

export default MyPaidExpDetailPage;
