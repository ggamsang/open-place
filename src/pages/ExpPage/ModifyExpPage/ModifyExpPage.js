import ClientTemplate from 'clientTemplate';
import ModifyExpContainer from 'containers/ExpContainer/ModifyExpContainer';
import { useParams } from "react-router-dom";
import NeedToLogin from 'Verification/NeedToLogin';

function ModifyExpPage() {
  let params = useParams();
  return (NeedToLogin(
    <ClientTemplate>
      <ModifyExpContainer item_id={params.id} />
    </ClientTemplate>));
}

export default ModifyExpPage;