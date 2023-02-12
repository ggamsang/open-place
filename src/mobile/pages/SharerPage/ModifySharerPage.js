import ModifySharerContainer from 'mobile/containers/SharerContainer/ModifySharerContainer';
import ClientTemplate from 'mobile/clientTemplate';
import NeedToLogin from 'Verification/NeedToLogin';

function ModifySharerPage() {
  return (NeedToLogin(<ClientTemplate>
    <ModifySharerContainer />
  </ClientTemplate>));
}

export default ModifySharerPage;