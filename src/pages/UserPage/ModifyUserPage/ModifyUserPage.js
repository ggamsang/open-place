import ClientTemplate from 'clientTemplate';
import ModifyUserContainer from 'containers/UserContainer/ModifyUserContainer';
import NeedToLogin from 'Verification/NeedToLogin';

function ModifyUserPage() {
  return (NeedToLogin(
    <ClientTemplate>
      <ModifyUserContainer />
    </ClientTemplate>)
  );
}

export default ModifyUserPage;