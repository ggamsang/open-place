import ClientTemplate from 'clientTemplate';
import { Outlet } from "react-router-dom";
import NeedToLogin from 'Verification/NeedToLogin';
import CreateExpContainer from 'containers/ExpContainer/CreateExpContainer';

function CreateExpPage() {
  return (NeedToLogin(<ClientTemplate>
    <CreateExpContainer outlet={Outlet} />
  </ClientTemplate>)
  );
}

export default CreateExpPage;