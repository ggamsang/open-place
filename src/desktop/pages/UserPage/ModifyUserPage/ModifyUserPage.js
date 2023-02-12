import ClientTemplate from 'desktop/clientTemplate';
import ModifyUserContainer from 'desktop/containers/UserContainer/ModifyUserContainer';
import NeedToLogin from 'Verification/NeedToLogin';

function ModifyUserPage() {
  return (NeedToLogin(
    <ClientTemplate>
      <ModifyUserContainer />
    </ClientTemplate>)
  );
}

export default ModifyUserPage;