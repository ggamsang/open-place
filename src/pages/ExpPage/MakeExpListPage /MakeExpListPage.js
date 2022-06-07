import { useParams } from 'react-router';
import ClientTemplate from 'clientTemplate/ClientTemplate';
import MakeExpListContainer from 'containers/ListContainer/ExpListContainer/MakeExpListContainer';

function MakeExpListPage() {
  let params = useParams();

  return (<ClientTemplate i_dont_need_footer={true}>
    <MakeExpListContainer keyword={params.keyword} />

  </ClientTemplate>)
}
export default MakeExpListPage;