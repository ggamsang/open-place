import ModifySharerContainer from 'desktop/containers/SharerContainer/ModifySharerContainer';
import ClientTemplate from 'desktop/clientTemplate';
import NeedToLogin from 'Verification/NeedToLogin';

function ModifySharerPage() {
  return (NeedToLogin(<ClientTemplate>
    <ModifySharerContainer />
  </ClientTemplate>));
}

export default ModifySharerPage;