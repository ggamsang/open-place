import CreateSharerContainer from 'desktop/containers/SharerContainer/CreateSharerContainer';
import ClientTemplate from 'desktop/clientTemplate';
import NeedToLogin from 'Verification/NeedToLogin';

function CreateSharerPage() {
  return (
    NeedToLogin(<ClientTemplate>
      <CreateSharerContainer />
    </ClientTemplate>
    ));
}

export default CreateSharerPage;