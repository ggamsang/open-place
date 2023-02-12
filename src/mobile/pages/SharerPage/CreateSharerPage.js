import CreateSharerContainer from 'mobile/containers/SharerContainer/CreateSharerContainer';
import ClientTemplate from 'mobile/clientTemplate';
import NeedToLogin from 'Verification/NeedToLogin';

function CreateSharerPage() {
  return (
    NeedToLogin(<ClientTemplate>
      <CreateSharerContainer />
    </ClientTemplate>
    ));
}

export default CreateSharerPage;