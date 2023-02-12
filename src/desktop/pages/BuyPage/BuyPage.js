import ClientTemplate from "desktop/clientTemplate";
import BuyContainer from "desktop/containers/BuyContainer";
import { useParams } from "react-router";
import NeedToLogin from "Verification/NeedToLogin";

function BuyExpPage() {
  const params = useParams();
  return NeedToLogin(
    <ClientTemplate>
      <BuyContainer item_id={params.id} />
    </ClientTemplate>
  );
}

export default BuyExpPage;
