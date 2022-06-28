import ModifySharerContainer from 'containers/SharerContainer/ModifySharerContainer';
import ClientTemplate from 'clientTemplate';
import NeedToLogin from 'Verification/NeedToLogin';

function ModifySharerPage() {
  return (NeedToLogin(<ClientTemplate>
    <ModifySharerContainer />
  </ClientTemplate>));
}

export default ModifySharerPage;