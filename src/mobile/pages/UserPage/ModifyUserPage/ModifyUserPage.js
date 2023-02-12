import ClientTemplate from 'mobile/clientTemplate';
import ModifyUserContainer from 'mobile/containers/UserContainer/ModifyUserContainer';
import NeedToLogin from 'Verification/NeedToLogin';

function ModifyUserPage() {
  return (NeedToLogin(
    <ClientTemplate>
      <ModifyUserContainer />
    </ClientTemplate>)
  );
}

export default ModifyUserPage;