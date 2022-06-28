import CreateSharerContainer from 'containers/SharerContainer/\bCreateSharerContainer';
import ClientTemplate from 'clientTemplate';
import NeedToLogin from 'Verification/NeedToLogin';

function CreateSharerPage() {
  return (
    NeedToLogin(<ClientTemplate>
      <CreateSharerContainer />
    </ClientTemplate>
    ));
}

export default CreateSharerPage;